componentDidMount() {
  axios.get(`/api/menus/${this.props.id}/items`)
  .then( res => {
    console.log(res)
    this.setState({ items: res.data, })
  })
  .catch( err => {
    console.log(err)
  })
}