import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      "&.Mui-selected": {
        background: "#E32526",
        color: "#fff",
      },
    },
  },
}));

export default function PaginationControlled({ totalNumberOfPages, handlePaginationChange, page }) {
  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalNumberOfPages}
        classes={{ ul: classes.ul }}
        page={page}
        onChange={handlePaginationChange}
      />
    </Stack>
  );
}
