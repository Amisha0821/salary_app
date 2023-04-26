import React from 'react';

class SalaryApp extends React.Component {

    constructor() {
        super();

        this.state = {
            salaryInfo: [],
            salaryTypeName: "",
            incentive: "",
            fixedSalary: "",
            minOrders: ""
        }
    }

    formData = (e) => {
        //for referesh a data
        e.preventDefault();

        //destructring data
        const { salaryInfo, salaryTypeName, incentive, fixedSalary, minOrders } = this.state;

        //object created
        const salaryInfoObj = {
            salaryTypeName,
            fixedSalary,
            minOrders,
            incentive
        }

        //push a data 
        salaryInfo.push(salaryInfoObj);

        this.setState({
            salaryInfo
        }, () => {
            console.log("|||Salary Information", salaryInfo);
        })
        console.log("|||SalaryInfo", salaryInfo);

        //when add a data it's reset a value 
        e.target.reset();
    }

    textChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    reactTable = () => {
        
        const salaryInfo = this.state.salaryInfo;

        const data = salaryInfo.map((d, i) => {
            return (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{d.salaryTypeName}</td>
                    <td>{d.fixedSalary}</td>
                    <td>{d.minOrders}</td>
                    <td>{d.incentive}</td>
                </tr>
            )
        });
        return data;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formData.bind(this)}>
                    <div className='form-group'>
                        <h1>Salary App</h1>
                    </div>
                    <div className="form-group">
                        <MyInput
                            id="salaryTypeName"
                            type="text"
                            name="salaryTypeName"
                            title="Salary Type Name"
                            value={this.state.salaryTypeName}
                            change={this.textChange.bind(this)}
                            placeholder="Enter Salary type"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <MyInput
                            id="fixedSalary"
                            type="number"
                            name="fixedSalary"
                            className="form-control"
                            title="Fixed salary"
                            placeholder="Enter fixed salary"
                            value={this.state.fixedSalary}
                            change={this.textChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <MyInput
                            id="minOrders"
                            type="number"
                            name="minOrders"
                            className="form-control"
                            title="Minimum Orders"
                            placeholder="Enter orders"
                            value={this.state.minOrders}
                            change={this.textChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <MyInput
                            id="incentive"
                            type="number"
                            name="incentive"
                            className="form-control"
                            title="Incentive"
                            placeholder="Enter Incentive"
                            value={this.state.incentive}
                            change={this.textChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
                <table className="table table-striped">
                    <thead>
                        <th>Sr.no</th>
                        <th>Salary Type Name</th>
                        <th>Fixed Salary</th>
                        <th>Min orders</th>
                        <th>Incentive</th>
                    </thead>
                    <tbody>
                        {this.reactTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const MyInput = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.name}> {props.title} </label><br></br>
            <input id={props.name} type={props.type} className={props.className} name={props.name} placeholder={props.placeholder} value={props.theValue} onChange={props.change} />
        </div>
    )
}

export default SalaryApp;