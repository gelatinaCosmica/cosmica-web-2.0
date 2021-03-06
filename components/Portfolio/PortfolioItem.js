import Image from "next/image"
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import useWidth from '../../hooks/useWidth'

const invertedStyles = {
  inverted: [
    "text-left",
    "space-y-5",
    "absolute",
    "flex",
    "flex-col",
    "left-0",
    "w-3/6",
    "col-span-4"
  ],
  notInverted: [
    "text-right",
    "space-y-5",
    "absolute",
    "flex",
    "flex-col",
    "right-0",
    "w-3/6",
    "col-span-4"
  ]
}

const strInvertedStyles = invertedStyles.inverted.join(' ').toString()
const strNotInvertedStyles = invertedStyles.notInverted.join(' ').toString()

function PortfolioItem({ image, title, description, techs, githubLink, extLink, inverted }) {
  const getWidth = useWidth()

  if (getWidth <= 768) {
    return (
      <li className="shadow-md relative ">

        {/* Image */}
        <div className={`flex justify-left h-96 relative`}>
          <Image
            alt=''
            className="rounded-md"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            src={image.mobile}
          />

          {/* Project Info */}
          <div className="absolute place-self-center flex flex-col max-w-full px-8">
            <span className="SFMono text-orange-text text-sm">Featured Project</span>
            <a href={extLink} target="_blank" rel="noopener noreferrer">
              <h2 className="text-gray-200 text-xl md:text-xl w-auto font-heebo font-semibold pt-2 hover:text-orange-text">{title}</h2>
            </a>
            <div className="h-auto py-6 text-gray-400">
              <p>{description}</p>
            </div>
            <div className="flex bottom justify-start flex-wrap text-gray-400 SFMono text-sm">
              {
                techs.map(item => {
                  return (
                    <span key={Math.random()} className="pr-6 pb-2" >{item}</span>
                  )
                })
              }
            </div>
            <div className="flex justify-start w-full self-end text-gray-400 pt-5 text-xl space-x-3">
              <div>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
                </a>
              </div>
              <div>
                <a href={extLink} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </li >
    )
  }

  return (
    <li className="grid grid-cols-12 relative h-full items-center">
      {/** Image */}
      <div className={`h-auto w-auto flex justify-center relative col-span-7 ${inverted ? 'col-end-13' : null}`}>
        <Image
          className="rounded-md shadow-md "
          src={image.normal}
          alt=''
          layout="intrinsic"
          width={600}
          height={390}
          objectPosition={inverted ? 'right' : 'left'}
          objectFit='contain'
          priority="normal"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={extLink}
          className="blurFix h-full w-full absolute rounded-md z-30 opacity-60 hover:bg-black transition duration-300 ease-out"
        />
      </div>

      {/** Project Info */}
      <div className={`${inverted ? strInvertedStyles : strNotInvertedStyles} z-30`}>
        <div>
          <span className="SFMono text-orange-text text-sm">Featured Project</span>
          <br />
          <a href={extLink} target="_blank" rel="noopener noreferrer">
            <h2 className={`text-gray-200 text-xl md:text-xl w-fit font-heebo font-semibold whitespace-nowrap hover:text-orange-text transition duration-400 ease-out ${!inverted ? "float-right" : null}`}>{title}</h2>
          </a>
        </div>
        <div className={`bg-light-gray-bg h-auto py-3 rounded-md shadow-md text-gray-400 ${inverted ? "pl-4 pr-10" : "pr-4 pl-10"}`}>
          <p>{description}</p>
        </div>
        <ul className={`list-none space-x-3 text-gray-400 SFMono text-sm flex ${inverted ? "justify-start" : "justify-end"}`}>
          {
            techs.map(item => {
              return (
                <li key={Math.random()}>{item}</li>
              )
            })
          }
        </ul>
        <div className={`flex w-full text-gray-400 text-xl space-x-3 ${inverted ? "justify-start" : "justify-end"}`}>
          <div>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FiGithub className="hover:text-orange-text transition duration-400 ease-out" />
            </a>
          </div>
          <div>
            <a href={extLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="hover:text-orange-text transition duration-400 ease-out" />
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default PortfolioItem
