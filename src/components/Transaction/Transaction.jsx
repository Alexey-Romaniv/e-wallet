export const Transaction = ({info: {date,type, category, sum, wallet,comment }}) => {
    // console.log(info)
    console.log(date, type, category, sum, wallet)
    return <div>
        <p>Date: {date}</p>
        <p>Type: {type}</p>
        <p>Category : {category ? category : 'Regular income'}</p>
        <p>Comment: {comment? comment: ''}</p>
        <p>Sum: {sum}</p>
        <p>Balance: {wallet}</p>
    </div>
}