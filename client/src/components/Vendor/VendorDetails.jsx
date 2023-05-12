import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";
const VendorDetails = () => {
  return (
    <>
    <Button style={{'marginLeft':'1rem'}}> <Link to={"/admin"}><ArrowBackIcon/>Back</Link> </Button>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Driver ID</Th>
              <Th>Driver's Name</Th>
              <Th>Location</Th>
              <Th>Phone No.</Th>
              <Th>Total Trips</Th>
              <Th>Last Trip</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>123</Td>
              <Td>xyz</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>8</Td>
              <Td>1/4/23</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VendorDetails;
