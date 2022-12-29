import React from 'react'
import './Favorites.css'
import { Heading, Card , Button,Message } from '../../components'
import { useAppContext } from '../../context/AppContext'

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext()
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id)
    return boolean
  }

  return (
    <div className='book__favorites'>
      <Heading title="favorite Lists" />
      <div className="book__favorites-books">
        {favorites.length > 0 ? favorites.map((book, index) =>
          <div className="book__home-featured_book favorites" key={index}>
            <Card image_url={book.image_url} title={book.title} authors={book.authors} format={book.format} rating={book.rating} />
            {favoritesChecker(book.id)
              ? <Button children="Remove Favorite" type="button" onClick={() => removeFromFavorites(book.id)} />
              : <Button children="Add Favorite" type="button" onClick={() => addToFavorites(book)} />
            }
          </div>
        ) : <Message message="You don't have any favorites book yet !"/>}
      </div>
    </div>
  )
}

export default Favorites