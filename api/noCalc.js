import imageUrlBuilder from '@sanity/image-url'
import {client} from '../../js/sanityClient'

const builder = imageUrlBuilder(client)


function urlFor(source) {
  return builder.image(source)
}

const url = '*[_type == "reading" ]{passage1{whatWillBeRead[]{asset->{url}}}}'
const questOptionImage = document.querySelector('.passage_section section')
urlFor(url).forEach((url) => {
  const Image = document.createElement('img');
  Image.src = url
  questOptionImage.appendChild(Image);
});