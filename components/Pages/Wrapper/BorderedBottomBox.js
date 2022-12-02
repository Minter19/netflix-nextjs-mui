import { Box } from "@mui/material"
import { alpha, styled } from "@mui/material/styles"
import { grey } from "@mui/material/colors"

//reusable component
const BorderedBottomBox = styled(Box)(() => ({
    borderBottom: `8px solid ${grey[900]}`
}))

export default BorderedBottomBox