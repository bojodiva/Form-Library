

export default function UserTable({ tableData }){
  return(
    <>
    <div className="ut--section">
        <h1>User Data</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        <tbody>
          {tableData.map((data, index) => (
      <tr key={index}>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
        </tr>
))}
          </tbody>
      </table>
    </div>
    </>
  )
}