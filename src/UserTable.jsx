

export default function UserTable({ tableData, onDelete }){

  return(
    <>
    <div className="ut--section">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Address</th>
          <th>Clear</th>
        </tr>
        <tbody>
          {tableData.map((data) => (
      <tr key={data.id}>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.password}</td>
          <td>{data.address}</td>
        <td className="btn--td">
          <button onClick={() => onDelete(data.id)} className="table--btn">x</button>
        </td>
        </tr>
       ))}
          </tbody>
     
      </table>
    </div>
    </>
  )
}