import React, { SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Personal } from './Components/Personal';
import { Contact } from './Components/Contact';
import { Review } from './Components/Review';
import { AlertNow } from './Components/Alert';
import { valTypes } from './Components/Types';

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal Information', 'Contact Information', 'Reveiw your Information'];
}

function getStepContent(stepIndex: number, setStep: React.Dispatch<SetStateAction<number>>, setval: React.Dispatch<SetStateAction<valTypes>>, val: valTypes) {

  switch (stepIndex) {
    case 0:
      return <Personal submit={setStep} val={val} setval={setval} />;
    case 1:
      {
        return <Contact submit={setStep} val={val} setval={setval} />
      }
    case 2:
      return <Review submit={setStep} val={val} />;
    default:
      return 'Sorry You not going to accurate way';
  }
}


export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [val, setval] = React.useState({ name: "", age: 0, Program: '', phone: '', email: '', password: '' });
  const steps = getSteps();

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper style={{ background: "transparent" }} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Congratulations<br />You have Successfully submitted all the steps</Typography>
            <Button onClick={() => { handleReset(); AlertNow() }} color="secondary">Sign Up</Button>
          </div>
        ) : (
            <div>
              {getStepContent(activeStep, setActiveStep, setval, val)}
            </div>
          )}
      </div>
    </div>
  );
}