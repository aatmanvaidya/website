import React from "react"
import { Box, Heading, Paragraph } from "grommet"
import { ExternalLink } from "react-feather"
import { PlainExternalLink } from "./TattleLinks"
import { StaticImage } from "gatsby-plugin-image"

const PeopleCard = ({ name, role, url }) => (
  <Box
    fill
    direction={"column"}
    pad={"medium"}
    onClick={() => {}}
    hoverIndicator={true}
    focusIndicator={false}
    border
    round={"small"}
  >
    <PlainExternalLink href={url} target={"_blank"}>
      <Box direction={"row-responsive"}>
        {/* <Box width={"medium"} height={"medium"} background={"red"}>
        <StaticImage src="https://placekitten.com/800/600" />
      </Box> */}
        <Box direction={"row"} align={"center"}>
          <Heading level={3} margin={"none"} weight={500} color={"brand"}>
            {name}
          </Heading>
          <Box flex={"grow"} />
          {url && url.length != 0 && <ExternalLink size={16} />}
        </Box>
        <Paragraph size={"small"}>{role}</Paragraph>
      </Box>
    </PlainExternalLink>
  </Box>
)

export default PeopleCard