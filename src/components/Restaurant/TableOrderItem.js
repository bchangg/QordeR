import React, { useState } from 'react';
import axios from 'axios';
import { Button, TableRow, TableCell } from '@material-ui/core';

const PENDING = "Pending";
const ACCEPT = "Accept";
const COOKING = "Cooking";
const DONE = "Done";
const PASS = "Pass";
const SEND = "Send";
const COMPLETED = "Completed";

export default function TableOrderItem(props) {
  const [status, setStatus] = useState(props.item.time_accepted ? props.item.time_completed ? COMPLETED : COOKING : PENDING)

  const persistStatus = function(orderDetailId, nextStatus) {
    if (status !== COOKING) {
      axios.post(`/api/upgradeStatus/${orderDetailId}`)
        .then((response) => {
          setStatus(nextStatus);
        })
        .catch((error) => {
          setStatus(current => current);
        });
    } else {
      setStatus(nextStatus);
    }
  }

  const renderStatusBadge = function() {
    let badgeType;
    if (status === PENDING) {
      badgeType = 'danger';
    } else if (status === COOKING) {
      badgeType = 'warning';
    } else if (status === PASS) {
      badgeType = 'success';
    } else {
      badgeType = 'secondary';
    }
    return (
      <span class={`badge badge-${badgeType}`}>{status}</span>
    )
  };

  const renderButton = function(item) {
    let buttonText;
    let nextStatus;
    if (status === PENDING) {
      buttonText = ACCEPT;
      nextStatus = COOKING;
    } else if (status === COOKING) {
      buttonText = DONE;
      nextStatus = PASS;
    } else if (status === PASS) {
      buttonText = SEND;
      nextStatus = COMPLETED;
    } else {
      return;
    }
    return (
      <Button onClick={() => persistStatus(item.id, nextStatus)} class="btn btn-outline-primary">{buttonText}</Button>
    )
  }

  const formatDate = function(dateString) {
    const date = new Date(dateString);
    // const day = date.getDay();
    // switch (day) {
    //   case 0:
    //     result += 'Sunday';
    //     break;
    //   case 1:
    //     result += 'Monday';
    //     break;
    //   case 2:
    //     result += 'Tuesday';
    //     break;
    //   case 3:
    //     result += 'Wednesday';
    //     break;
    //   case 4:
    //     result += 'Thursday';
    //     break;
    //   case 5:
    //     result += 'Friday';
    //     break;
    //   case 6:
    //     result += 'Saturday';
    //     break;
    //   default:
    //     result = '';
    // }
    return `${(date.getHours() < 10 ? '0' : '') + date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${(date.getSeconds() < 10 ? '0' : '') + date.getSeconds()}`
  }

  return (
    <TableRow>
    <TableCell>{props.item.item_name}</TableCell>
    <TableCell>{props.item.quantity}</TableCell>
    <TableCell>{formatDate(props.item.time_ordered)}</TableCell>
    <TableCell>{renderStatusBadge()}</TableCell>
    <TableCell>{renderButton(props.item)}</TableCell>
    </TableRow>
  )
}