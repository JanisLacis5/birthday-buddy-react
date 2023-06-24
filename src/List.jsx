function List({people}) {
    return (
        <>
            {people.map((person) => {
                return (
                    <li className="person" key={person.id}>
                        <img
                            className="roundImg"
                            src={person.image}
                            alt={person.name}
                        />
                        <h4>{person.name}</h4>
                        <p>{person.age} years</p>
                    </li>
                )
            })}
        </>
    )
}
export default List
