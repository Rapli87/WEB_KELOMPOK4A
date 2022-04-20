import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Destinasi Tersembunyi</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
                src='images/img-pantaigondomayit.jpg'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                label='Tulungagung'
                path='/destination'
              />
              <CardItem 
                src='images/img-cobansupiturang.jpg'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                label='Malang'
                path='/destination'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem 
                src='images/img-sarkawi.jpg'
                text='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
                label='Lumajang'
                path='/destination'
              />
              <CardItem 
                src='images/img-pantaidlodo.jpg'
                text='Lorem ipsum was purposefully designed to have no meaning, but appear like real text, making it the perfect placeholder.'
                label='Tulungagung'
                path='/destination'
              />
              <CardItem 
                src='images/img-airterjunnglirip.jpg'
                text='Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.'
                label='Tuban'
                path='/destination'
              />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Cards;
