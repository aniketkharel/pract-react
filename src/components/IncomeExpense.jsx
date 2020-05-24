import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const IncomeExpense = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Income
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              +Rs 0.0
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Expense
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              -Rs 0.0
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
