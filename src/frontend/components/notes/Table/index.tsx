import React, { useState, ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'

import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import IconButton from '@mui/material/IconButton'
import LaunchIcon from '@mui/icons-material/Launch'
import { useQuery } from '@apollo/client'

import query from './query'
import { Note, NotesArgs } from 'backend/_types/notes'
import formatDateShort from '../../_common/_utils/formatDateShort'
import TableSearchTextField from '../../../components/_common/TableSearchTextField'

const NotesTable = ({
  onCreateHref
}: {
  onCreateHref?: string | { pathname: string; query: { [slug: string]: string } }
}): ReactElement => {
  const router = useRouter()

  const [searchText, setSearchText] = useState<string>('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  const [filterOpen, setFilterOpen] = useState(false)
  const [parameters, setParameters] = useState({
    searchText,
    page,
    rowsPerPage
  })

  const { data, loading, fetchMore } = useQuery(query, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
    variables: {
      skip: 0,
      limit: 25,
      searchText
    }
  })

  const notes: Note[] = data?.notes || []
  const notesCount = data?.notesCount

  useEffect(() => {
    const url = {
      pathname: router.pathname,
      query: {
        ...parameters
      }
    }
    router.push(url, undefined, { shallow: true })
  }, Object.values(parameters))

  useEffect(() => {
    setPage(0)
  }, [searchText])

  const search = (): void => {
    if (loading) {
      return
    }

    const fetchMoreVariables: NotesArgs = {
      skip: Number(page * rowsPerPage),
      limit: rowsPerPage,
      searchText
    }

    fetchMore({
      variables: fetchMoreVariables,
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev
        }

        return fetchMoreResult
      }
    })
  }

  useEffect(() => {
    search()
  }, [page, rowsPerPage])

  useEffect(() => {
    const timeoutId = setTimeout(() => search(), 1000)
    return (): void => {
      clearTimeout(timeoutId)
    }
  }, [searchText])

  return (
    <>
      <TableSearchTextField
        searchText={searchText}
        loading={loading}
        onGotoCreatePage={() => router.push(onCreateHref)}
        onFilter={(): void => {
          setFilterOpen(true)
        }}
        onSearch={(e) => setSearchText(e)}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow selected>
              <TableCell padding={'checkbox'} />
              <TableCell>{'Title'}</TableCell>
              <TableCell>{'Notes Content'}</TableCell>
              <TableCell>{'Created At'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes.map((note: Note, index): ReactElement => {
              return (
                <TableRow key={index} selected={index % 2 !== 0}>
                  <TableCell padding='checkbox'>
                    <IconButton
                      onClick={() => {
                        router.push({
                          pathname: '/notes/[noteId]',
                          query: {
                            noteId: String(note?._id)
                          }
                        })
                      }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>{note?.title}</TableCell>
                  <TableCell>
                    {note?.noteContent}
                  </TableCell>
                  <TableCell>
                    {formatDateShort(note?.createdAt)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50, 75, 100, 125, 150, 175, 200]}
        component={'span'}
        count={notesCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_e, newPage: number): void => {
          window.scrollTo(0, 0)
          setPage(newPage)
        }}
        onRowsPerPageChange={(e): void => {
          const newRowsPerPage = Number(e.target.value)
          setRowsPerPage(newRowsPerPage)
          setPage(0)
        }}
      />
    </>
  )
}

export default NotesTable
