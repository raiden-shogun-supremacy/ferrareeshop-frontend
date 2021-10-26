import employee from '../../../Data/employee.json';
import '../PageStyle.css';
import '../OrderStatus/StatusTable.css';

const ERM = () => {
    const employee_fetch = employee.map((data, key) => {
        let isHead = '';
        switch(data.IsHead){
            case "1" :
                isHead = "True";
                break;
            case "0" :
                isHead = "-";
                break;
        }

        let deptName = '';
        switch(data.DeptNo){
            case "1" :
                deptName = "Sales";
                break;
            case "2" :
                deptName = "Marketing";
                break;
        }
        return (
            <tr>
                <td># {data.EmployeeID}</td>
                <td>{data.Fname}</td>
                <td>{data.Lname}</td>
                <td>{deptName}</td>
                <td>{data.Username}</td>
                <td>{isHead}</td>
            </tr>
        );
    })
    return (
        <div className="container">
            <h1>Employee Management 🧑‍💼</h1>
            <h4>Manage you team here.</h4>
            <div className="content">
                <div className="table-align">
                    <table cellPadding="0" cellPadding="0" border="0">
                        <tr>
                            <th>Employee ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Dept.</th>
                            <th>Username</th>
                            <th>IsHead?</th>
                        </tr>
                        {employee_fetch}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ERM;