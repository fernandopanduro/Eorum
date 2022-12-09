import { Ruta } from "../components/Ruta";
import styles from '../css/About.module.css'
import img from '../pintures/products/laser-cheung.jpg'

import Fade from 'react-reveal/Fade';

export function About() {
    return (
        <section className='container zIndex'>
            <Fade top>
                <Ruta ruta='About' />
                <h2 className='title'>About</h2>
            </Fade>
            <div className='containerPage'>
                <Fade bottom>
                    <p className='paragrath'>Sukajan, also known as the Japanese Souvenir jacket, is cut similar to a classic American baseball jacket in a soft silky fabric featuring iconic Japanese imagery. The jackets were first made for the American soldiers in Yokosuka, south of Tokyo, to bring home as souvenir or gifts after their temporary occupation of Japan after World War II. The word Sukajan is a mashup of ‘Yokosuka’ and ‘Jan’, which means jumper in Japanese.</p>
                    <p className='paragrath'>Sukajan is a clothing type that has successfully become an integral part of popular culture. These jackets are known for featuring a characteristic embroidered style. The first series of Sukajan Souvenir Jacket was created for the American GI to take home as souvenirs. However, at present the garment is worn widely by civilians, which include people belonging to different segments of the society. These jackets have also been seen in innumerable films and fashion shows. One thing that has remained the same since the time Sukajans first came into being is the fact that these jackets represents rebellion in the same manner even today as it used to during their inception in Japan.</p>
                    <p className='paragrath'>Right now, these jackets enjoy immense popularity both as street wear and high fashion outfits. However, when Sukajans were first tailored, they were meant only for complementing the robust appearance of American soldiers. Today, you will get Sukajan featuring a variety of embroideries; the color options available are also pretty wide-ranging. That was definitely not the case during the initial years.</p>
                    <img className={styles.img} src={img} alt="" />
                    <p className='paragrath'>A strategically designed Sukajan Souvenir Jacket would look good on people of all age groups. However, one should always pick a Sukajan carefully. Originally, these outfits were all about customization and messaging. So, the Sukajan you pick for yourself must have something that represents your personality. To put it more bluntly, these souvenir jackets must say something about the wearer. Another thing you must remember when shopping for this clothing type is that the design it features should have similar relevance even after three or four decades. That’s because you can expect a piece made out of high quality materials last for several decades; however, such durability would be beneficial for you only if the embroidery or artwork on the piece appear meaningful even after such a long time.</p>
                    <p className='paragrath'>As mentioned above Sukajans were first created as gift items. Gifting these jackets to your near and dear ones wouldn’t be a bad idea even today. However, make sure that the person you are buying the Sukajan Souvenir jacket for is smart enough to wear them.</p>
                    <p className='paragrath'>For designing a perfect Sukajan one must understand the cultural history behind this unique and amazing outfit. This is where every item in our collection scores heavily. All the Sukajan souvenir jackets we are offering are perfect representatives of the original purpose these jackets were tailored for.</p>
                </Fade>
            </div>
        </section>
    )
}