import { createTheme, ThemeOptions } from '@mui/material'

const getDesignTokens = (): ThemeOptions => ({
	palette: { primary: { main: '#3d5e53' }, secondary: { main: '#17007d' }, error: { main: '#f44336' } },
	components: {
		MuiTablePagination: {
			defaultProps: {
				count: -1,
				rowsPerPageOptions: [25, 50, 75, 100, 125, 150, 175, 200],
				labelDisplayedRows: ({ from, to, count }: { from: number; to: number; count: number }) =>
					count > 0
						? `${from?.toLocaleString()} - ${to?.toLocaleString()} of ${count?.toLocaleString()}`
						: `${from?.toLocaleString()} - ${to?.toLocaleString()}`,
				component: 'span'
			}
		},
		MuiCardHeader: {
			defaultProps: {
				titleTypographyProps: { typography: 'body1', fontWeight: 'bold', color: 'text.primary' },
				subheaderTypographyProps: { typography: 'body1', color: 'text.secondary' }
			}
		},
		MuiAutocomplete: {
			defaultProps: {
				fullWidth: true,
				size: 'small',
				autoSelect: true,
				autoComplete: true,
				autoHighlight: true,
				clearOnEscape: true
			}
		},
		MuiBreadcrumbs: { defaultProps: { sx: { mb: 2 }, separator: '>' } },
		MuiButton: { defaultProps: { size: 'small' } },
		MuiButtonGroup: { defaultProps: { size: 'small' } },
		MuiCheckbox: { defaultProps: { color: 'primary' } },
		MuiChip: { defaultProps: { size: 'small' } },
		MuiDialogTitle: { defaultProps: { typography: 'body1', fontWeight: 'bold' } },
		MuiFormControlLabel: { defaultProps: { sx: { display: 'block' } } },
		MuiIconButton: { defaultProps: { size: 'small' } },
		MuiLink: { defaultProps: { sx: { cursor: 'pointer' }, underline: 'hover', color: 'inherit' } },
		MuiList: { defaultProps: { dense: true } },
		MuiListSubheader: { defaultProps: { disableSticky: true, color: 'primary' } },
		MuiPaper: { defaultProps: { elevation: 0, variant: 'outlined', sx: { mb: 1 } } },
		MuiTable: { defaultProps: { size: 'small' } },
		MuiTableRow: { defaultProps: { hover: true } },
		MuiTextField: { defaultProps: { fullWidth: true, margin: 'dense', variant: 'outlined', size: 'small' } },
		MuiTypography: { defaultProps: { color: 'text.primary' } }
	}
})

const theme = createTheme(getDesignTokens())

export default theme