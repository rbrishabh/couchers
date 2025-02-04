import { CardActions } from "@material-ui/core";
import Alert from "components/Alert";
import Button from "components/Button";
import Divider from "components/Divider";
import { CouchIcon, LocationIcon } from "components/Icons";
import IconText from "components/IconText";
import { useAuthContext } from "features/auth/AuthProvider";
import { CONNECTIONS } from "features/connections/constants";
import { EDIT, REQUEST } from "features/constants";
import FriendActions from "features/profile/actions/FriendActions";
import ProfileActionsMenuButton from "features/profile/actions/ProfileActionsMenuButton";
import {
  hostingStatusLabels,
  meetupStatusLabels,
} from "features/profile/constants";
import UserOverview from "features/profile/view/UserOverview";
import { HostingStatus, MeetupStatus } from "proto/api_pb";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  connectionsRoute,
  EditUserTab,
  routeToEditProfile,
  UserTab,
} from "routes";
import makeStyles from "utils/makeStyles";

import { useProfileUser } from "../hooks/useProfileUser";

const useStyles = makeStyles((theme) => ({
  cardActions: {
    flexWrap: "wrap",
    justifyContent: "center",
    padding: theme.spacing(0.5),
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },

  marginBottom3: {
    marginBottom: theme.spacing(3),
  },
}));

export interface OverviewProps {
  setIsRequesting: (value: boolean) => void;
}

const getEditTab = (tab: UserTab): EditUserTab | undefined => {
  switch (tab) {
    case "about":
    case "home":
      return tab;
    default:
      return undefined;
  }
};

export default function Overview({ setIsRequesting }: OverviewProps) {
  const classes = useStyles();
  const currentUserId = useAuthContext().authState.userId;
  const [mutationError, setMutationError] = useState("");
  const user = useProfileUser();

  const { tab } = useParams<{ tab: UserTab }>();

  return (
    <UserOverview>
      {mutationError && <Alert severity="error">{mutationError}</Alert>}
      <CardActions className={classes.cardActions}>
        {user.userId === currentUserId ? (
          <>
            <Button
              component={Link}
              to={routeToEditProfile(getEditTab(tab))}
              color="secondary"
            >
              {EDIT}
            </Button>
            <Button component={Link} to={connectionsRoute}>
              {CONNECTIONS}
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsRequesting(true)}>{REQUEST}</Button>
            <FriendActions user={user} setMutationError={setMutationError} />
            <ProfileActionsMenuButton />
          </>
        )}
      </CardActions>
      <IconText
        icon={CouchIcon}
        text={
          hostingStatusLabels[
            user.hostingStatus || HostingStatus.HOSTING_STATUS_UNKNOWN
          ]
        }
      />
      <IconText
        icon={LocationIcon}
        text={
          meetupStatusLabels[
            user.meetupStatus || MeetupStatus.MEETUP_STATUS_UNKNOWN
          ]
        }
      />
      <Divider className={classes.marginBottom3} />
    </UserOverview>
  );
}
