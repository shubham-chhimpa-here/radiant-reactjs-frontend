import './primarycard.scss'
import img1 from '../assets/img1.png'
import Rating from './Rating'
import Badge from './Badge'
export default function PrimaryCard({item}) {
const {id, badge} = item
    return <>

        <div className="primaryCard">
            { badge && <Badge badge={badge}/>}
            <div className='item-number'>{id}</div>
            <div className='imageSection'>
                <img src={img1} alt="" srcset="" />
                <p>Builder 1</p>
            </div>
            <div className='midSection'>
                <div className="discription">
                    <p><b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                </div>
                <div className="highlights">
                    <p>Main Highlights</p>
                    <ul>
                        <li>Build Responsive</li>
                        <li>Cool</li>
                        <li>Docs</li>
                    </ul>
                </div>
                <div className="moreinfo">
                    <button>Show more</button>
                </div>
            </div>
            <div className='rightSection'>
                <div className='ratingSection'>
                    <Rating />
                </div>
                <button className='button-primary'>View</button>
            </div>
        </div>

    </>
}