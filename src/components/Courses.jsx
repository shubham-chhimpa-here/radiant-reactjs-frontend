import './courses.scss'
import PrimaryCard from "./PrimaryCard";


export default function Courses() {
    const array = [
        {id: 1, badge: "Best Choice"},
        {id: 2, badge: "Best Value"},
        {id: 3, badge: false},
        {id: 4, badge: false},
        {id: 5, badge: false},
    ]
    return <>
        <div className="courses">
            <h1 style={{
                fontSize: '48px',
                width: '1024px',
                margin: 'auto',
                fontWeight: '400',
                color: '#2C384A',
                marginBottom: '40px'
            }}>Best Website builders in US</h1>

            {/* map with data  */}
            
            {
                array.map((item , i ) => <PrimaryCard key={i} item={item} />)
            }
        </div>
    </>
}