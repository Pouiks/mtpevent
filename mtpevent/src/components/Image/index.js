import styled from 'styled-components'

const ImageComponent = styled.img`
  width: 100%;
  height: auto;
`

function Image(props) {

    const src = props.src;
    const alt = props.alt;

  return (
    <ImageComponent src={src} alt={alt} />
  );
}

export default Image