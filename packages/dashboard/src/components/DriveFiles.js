import React from 'react'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { humanizedBytes } from '../format'

function DriveFiles ({ files }) {
  return (
    <TableContainer square component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>File</TableCell>
            <TableCell align='right'>Size</TableCell>
            <TableCell align='right'>Blocks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(files).map(([fileName, { size, blocks }]) => (
            <TableRow key={fileName}>
              <TableCell>{fileName}</TableCell>
              <TableCell align='right'>{humanizedBytes(size).pretty}</TableCell>
              <TableCell align='right'>{blocks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DriveFiles