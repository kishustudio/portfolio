interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = ({ image, alt, link }: Props) => {
  return (
    <div className="work-image">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="work-image-in">
          <img src={image} alt={alt} />
        </div>
      </a>
    </div>
  );
};

export default WorkImage;