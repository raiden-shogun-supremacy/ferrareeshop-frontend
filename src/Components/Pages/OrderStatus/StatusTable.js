import './StatusTable.css'

const StatusTable = ({ detail }) => {
    return(
        <div>
            <table>
                <tr>
                    <th>Receipt ID</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>{detail.ReceiptID}</td>
                    <td>{detail.Status}</td>
                </tr>
            </table>
        </div>
    )
}

export default StatusTable;