const formatdate = (iso_format) => {
  const date = new Date(iso_format)

  return date.toLocaleDateString("en-US", {
    year:"numeric",
    month:"long",
    day:"numeric"
  })
}

export default formatdate;