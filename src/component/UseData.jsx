const UseData = ({ data }) => {
    return (
        <>
            {
                data.map((curData) => {
                    const { id, deviceid, type, value, timecreated } = curData;

                    return (
                        <tr>
                            <td>{id}</td>
                            <td>{deviceid}</td>
                            <td>{type}</td>
                            <td>{value}</td>
                            <td>{timecreated}</td>
                        </tr>
                    )
                })
            }
        </>
    )

}
export default UseData;