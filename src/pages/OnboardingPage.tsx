import { useState } from "react";
import RoleSelectionPage from "./RoleSelectionPage";
import PersonalDetailsPage from "./PersonalDetailsPage";
import StudentDetailsPage from "./StudentDetailsPage";
import PreferredTimePage from "./PreferredTimePage";

const OnboardingPage = () => {
  const [step, setStep] = useState(0);

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => prev - 1);

  const steps = [
    <RoleSelectionPage onNext={goNext} />,
    <PersonalDetailsPage onNext={goNext} onBack={goBack} />,
    <StudentDetailsPage onNext={goNext} onBack={goBack} />,
    <PreferredTimePage onBack={goBack} />,
  ];

  return <div>{steps[step]}</div>;
};

export default OnboardingPage;
