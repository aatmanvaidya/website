import React from "react"
import { Box, Heading, Text, Image, Paragraph } from "grommet"
import { Link, PlainLink, SmartPlainLink } from "../../components/atomic/TattleLinks"

const CaseStudyPreview = ({
  coverImage,
  previewImage,
  title,
  description,
  url,
  publicationDate,
  offset,
  blog_slug
}) => {
  return (
    <Box
      gap={"xsmall"}
      margin={{ top: "medium" }}
      border={{ color: "#f4c6d7" }}
      round={"small"}
    >
      {coverImage ?
        <Box
          width={"100%"}
          height={"small"}
        >
          <Image src={coverImage} fit="contain" />
        </Box> : null

      }

      <Box pad={"medium"}>
        <PlainLink to={url} target={"_blank"}>
          <Box direction={"column"}>

            <Box
              width={"xsmall"}
              height={"xsmall"}
              round={"xxsmall"}
              overflow={"hidden"}
            >
              <Image src={previewImage} fit="contain" fill={true} />
            </Box>
            <Box>
              <Heading level={3} margin={{ bottom: "4.578px", top: "7.324px" }}>
                {title}
              </Heading>
              <Paragraph size={"medium"} margin={{ top: "none", bottom: "none" }}>
                {description}
              </Paragraph>
            </Box>

          </Box>
        </PlainLink>
      </Box>
      {blog_slug ? <Box pad={"medium"}>
        <SmartPlainLink target={blog_slug} >
          Read blog posts
        </SmartPlainLink>

      </Box> : null}
    </Box>
  )
}

export default CaseStudyPreview
