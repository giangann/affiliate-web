export const Tag = ({ label, ...props }) => {
  return (
    <span
      style={{
        backgroundColor: props.color ?? '#eff8ff',
        color: props.color ? '#ffffffb3' : '#b8c2cc',
        fontWeight: '600',
        fontSize: '0.75rem',
        marginRight: '0.5rem',
        padding: '2px 4px',
        borderRadius: '0.25rem',
        ...props?.sx
      }}
    >
      {label}
    </span>
  )
}
