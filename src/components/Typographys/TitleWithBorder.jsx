import { Typography } from '@mui/material'

const TitleWithBorder = (props) => {
  const { sx, title } = props
  return (
    <Typography
      component="h4"
      sx={{
        borderLeft: '4px solid #3490dc',
        paddingX: 1,
        lineHeight: 1,
        fontSize: '0.825rem',
        color: '#3d4852',
        fontWeight: 'bold',
        ...sx
      }}
    >
      {title}
    </Typography>
  )
}

export { TitleWithBorder }
