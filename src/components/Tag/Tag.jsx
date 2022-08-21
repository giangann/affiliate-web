export const Tag = ({ label }) => {
  return (
    <span
      style={{
        backgroundColor: '#eff8ff',
        color: '#b8c2cc',
        fontWeight: '600',
        fontSize: '0.75rem',
        marginRight: '0.5rem',
        padding: '2px 4px',
        borderRadius: '0.25rem'
      }}
    >
      {label}
    </span>
  )
}
