function AllExeats({exeats}) {
    return(
        <div>
            <h1>ALL EXEATS FROM STUDENTS</h1>
            {exeats.map((ex) =>(
              <div className="card">
                  <h4>NAME: {ex.name}</h4>
                  <p>LEVEL: {ex.level}</p>
                  <p>DEPARTURE: {ex.departure}</p>
                  <p>RETURN: {ex.returnDate}</p>
                  <p>HOMETOWN: {ex.hometown}</p>
                  <p>PHONE: {ex.phone}</p>
              </div>    
                ))}
        </div>
    )
}
export default AllExeats;