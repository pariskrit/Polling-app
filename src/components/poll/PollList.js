import React, { Component, useEffect, useState } from "react";
import {
  getAllPolls,
  getUserCreatedPolls,
  getUserVotedPolls,
} from "../../util/APIUtils";
import { castVote } from "../../util/APIUtils";
import LoadingIndicator from "../../common/LoadingIndicator";
import { POLL_LIST_SIZE } from "../../constants";
import { withRouter } from "react-router-dom";
import "./PollList.css";

function PollList(props) {
  const [polls, setPolls] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [last, setLast] = useState(true);
  const [currentVotes, setCurrentVotes] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  function loadPollList(page = 0, size = POLL_LIST_SIZE) {
    let promise;
    if (props.username) {
      if (props.type === "USER_CREATED_POLLS") {
        promise = getUserCreatedPolls(props.username, page, size);
      } else if (this.props.type === "USER_VOTED_POLLS") {
        promise = getUserVotedPolls(props.username, page, size);
      }
    } else {
      promise = getAllPolls(page, size);
    }

    if (!promise) {
      return;
    }

    setIsloading(true);

    promise
      .then((response) => {
        console.log(response);
        // const polls = polls.slice();
        // const currentVotes = currentVotes.slice();

        // setPolls([...polls, response.content]);
        // setPage(response.page);
        // setSize(response.size);
        // setTotalElements(response.totalElements);
        // setTotalPages(response.totalPages);
        // setLast(response.last);
        // setCurrentVotes(
        //   currentVotes.concat(Array(response.content.length).length).fill(null)
        // );
        // setIsloading(false);
      })
      .catch((error) => {
        setIsloading(false);
      });
  }

  useEffect(() => {
    setPolls([]);
    setPage(0);
    setSize(10);
    setTotalElements(0);
    setTotalPages(0);
    setLast(true);
    setCurrentVotes([]);
    setCurrentVotes([]);

    // loadPollList();
  }, [props.isAuthenticated]);

  function handleLoadMore() {
    loadPollList(page + 1);
  }

  function handleVoteChange(event, pollIndex) {
    const currentVotes = currentVotes.slice();
    currentVotes[pollIndex] = event.target.value;
    setCurrentVotes(currentVotes);
  }

  function handleVoteSubmit(event, pollIndex) {
    event.preventDefault();
    if (!props.isAuthenticated) {
      props.history.push("/login");

      return;
    }

    const poll = polls[pollIndex];
    const selectedChoice = currentVotes[pollIndex];

    const voteData = {
      pollId: poll.id,
      choiceId: selectedChoice,
    };

    castVote(voteData)
      .then((response) => {
        const polls = polls.slice();
        polls[pollIndex] = response;
        setPolls(polls);
      })
      .catch((error) => {
        if (error.status === 401) {
          props.handleLogout(
            "/login",
            "error",
            "You have been logged out. Please login to vote"
          );
        } else {
          alert("something went wrong");
        }
      });
  }

  return (
    <div className="polls-container">
      <h1>Poll Lists</h1>
    </div>
  );
}

export default withRouter(PollList);
