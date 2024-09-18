import React, { ReactElement, useEffect, useState } from 'react'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import MuiLink from '@mui/material/Link'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'

import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Cancel'
import DownloadIcon from '@mui/icons-material/Download'
import FilterListIcon from '@mui/icons-material/FilterList'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import PrintIcon from '@mui/icons-material/Print'
import SearchIcon from '@mui/icons-material/Search'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'

export interface TableSearchTextFieldProps {
	searchText?: string
	helperText?: string
	onSearch?: (e: string) => void
	loading?: boolean
	onFilter?: VoidFunction
	onPrint?: VoidFunction
	onDownload?: VoidFunction
	onViewColumns?: VoidFunction
	fullWidth?: boolean
	onGotoCreatePage?: VoidFunction
	onGotoFormsPage?: VoidFunction
	onGotoImportPage?: VoidFunction
	textFieldProps?: TextFieldProps
}

const TableSearchTextField = ({
	searchText,
	helperText,
	onSearch,
	loading,
	onGotoCreatePage,
	onGotoFormsPage,
	onGotoImportPage,
	onFilter,
	onPrint,
	onDownload,
	onViewColumns,
	fullWidth,
	textFieldProps = {}
}: TableSearchTextFieldProps): ReactElement => {
	const theme = useTheme()

	const [text, setText] = useState(searchText || '')

	useEffect(() => {
		if (!onSearch) {
			return
		}
		const timeoutId = setTimeout(() => onSearch(text), 1000)
		return (): void => {
			clearTimeout(timeoutId)
		}
	}, [text])

	useEffect(() => {
		setText(searchText)
	}, [searchText])

	const shortSearchTextField = useMediaQuery(theme.breakpoints.up('sm'), {
		noSsr: true
	})

	return (
		<>
			<Box
				sx={{
					mb: 1,
					width: '100%',
					display: 'flex',
					flexDirection: {
						xs: 'column',
						sm: 'row'
					},
					justifyContent: {
						xs: 'flex-start',
						sm: 'space-between'
					},
					alignItems: {
						xs: 'flex-start',
						sm: 'center'
					}
				}}
			>
				{(onGotoCreatePage ||
					onGotoFormsPage ||
					onGotoImportPage ||
					onFilter ||
					onViewColumns ||
					onPrint ||
					onDownload) && (
					<Grid container columnGap={1}>
						{onGotoCreatePage && (
							<Grid item>
								<Button variant={'contained'} startIcon={<AddIcon />} component={MuiLink} onClick={onGotoCreatePage}>
									{'Create'}
								</Button>
							</Grid>
						)}
						{onGotoFormsPage && (
							<Grid item>
								<Button variant={'contained'} startIcon={<AddIcon />} component={MuiLink} onClick={onGotoFormsPage}>
									{'Forms'}
								</Button>
							</Grid>
						)}
						{onGotoImportPage && (
							<Grid item>
								<Button
									variant={'outlined'}
									startIcon={<ImportExportIcon />}
									component={MuiLink}
									onClick={onGotoImportPage}
								>
									{'Import'}
								</Button>
							</Grid>
						)}
						{onFilter && (
							<Grid item>
								<Tooltip title={'Filter'}>
									<IconButton onClick={onFilter}>
										<FilterListIcon />
									</IconButton>
								</Tooltip>
							</Grid>
						)}
						{onViewColumns && (
							<Grid item>
								<Tooltip title={'Show/hide columns'}>
									<IconButton onClick={onViewColumns}>
										<ViewColumnIcon />
									</IconButton>
								</Tooltip>
							</Grid>
						)}
						{onPrint && (
							<Grid item>
								<Tooltip title={'Print'}>
									<IconButton onClick={onPrint}>
										<PrintIcon />
									</IconButton>
								</Tooltip>
							</Grid>
						)}
						{onDownload && (
							<Grid item>
								<Tooltip title={'Download'}>
									<IconButton onClick={onDownload}>
										<DownloadIcon />
									</IconButton>
								</Tooltip>
							</Grid>
						)}
					</Grid>
				)}
				{onSearch && (
					<TextField
						fullWidth={fullWidth || !shortSearchTextField}
						placeholder={'Search'}
						value={text}
						onChange={(e): void => {
							setText(e.target.value)
						}}
						helperText={helperText}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								onSearch(text)
							}
						}}
						sx={{ minWidth: 260 }}
						InputProps={{
							startAdornment: (
								<InputAdornment position={'start'}>
									<SearchIcon />
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position={'end'}>
									<IconButton
										style={{ paddingRight: 0 }}
										edge={'end'}
										onClick={(): void => {
											setText('')
										}}
										size={'small'}
									>
										<CancelIcon />
									</IconButton>
								</InputAdornment>
							)
						}}
						{...textFieldProps}
					/>
				)}
			</Box>
			{loading && <LinearProgress variant={'indeterminate'} />}
		</>
	)
}

export default TableSearchTextField
