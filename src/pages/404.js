const style = {
  display: 'flex',
  paddingTop: 70,
  minHeight: 600,
  justifyContent: 'center',
  alignItems: 'center',
}
export default () => (
  <div style={style}>
    <img style={{ height: 200 }} src={require('@/assets/404.png')} alt="pic" />
  </div>
)
