interface IProps {
    link: string,
    name: string,
    width?: string
}

function MapSVG(props: IProps) {
  return (
    <>
        <img src={props.link} style={{ filter: 'url(#blue-mask)', width: `${props.width}` }} alt={`Mapa ${props.name}`} />
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none', height: 'auto', width: 'auto' }}>
        <defs>
            <filter id="blue-mask">
            <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0039
                        0 0 0 0 0.1569
                        0 0 0 0 0.4627
                        0 0 0 1 0"
            />
            </filter>
        </defs>
        </svg>
    </>
  );
};

export default MapSVG;
