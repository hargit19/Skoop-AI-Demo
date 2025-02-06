import React, { useState } from 'react';
import styled from 'styled-components';

const UserResearchContainer = styled.div`
  flex: 1;
  background-color: #0E1034;
  color: white;
  padding: 2rem;
  overflow-y: auto;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-left: 0;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormBuilder = styled.div`
  width: 100%;
`;

const QuestionCard = styled.div`
  background-color: #0B1739;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(139, 61, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    border-color: rgba(139, 61, 255, 0.3);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const QuestionNumber = styled.div`
  background-color: #8b3dff;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const QuestionInput = styled.input`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8b3dff;
    background-color: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: #8890a0;
  }
`;

const OptionInput = styled(QuestionInput)`
  width: calc(100% - 40px);
  margin-bottom: 0.8rem;
  font-size: 1rem;
  padding: 0.8rem 1rem;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
  position: relative;
`;

const OptionNumber = styled.div`
  position: absolute;
  left: -40px;
  color: #8890a0;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background-color: ${props => props.secondary ? 'transparent' : '#8b3dff'};
  color: ${props => props.secondary ? '#8b3dff' : 'white'};
  border: ${props => props.secondary ? '1px solid #8b3dff' : 'none'};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
  
  &:hover {
    background-color: ${props => props.secondary ? 'rgba(139, 61, 255, 0.1)' : '#7433d3'};
  }

  &:disabled {
    background-color: #4a4a6a;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: #ff3d3d;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 61, 61, 0.1);
  }
`;

const QuestionType = styled.select`
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:focus {
    outline: none;
    border-color: #8b3dff;
  }

  option {
    background-color: #0B1739;
    padding: 0.5rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;

    button {
      width: 100%;
    }
  }
`;

const OptionsContainer = styled.div`
  padding-left: 40px;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`;

const InfoSection = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #0B1739;
  border-radius: 12px;
  border: 1px solid rgba(139, 61, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InfoTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 24px;
    background-color: #8b3dff;
    border-radius: 2px;
  }
`;

const InfoText = styled.p`
  color: #8890a0;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const InfoPoints = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const InfoPoint = styled.li`
  color: #8890a0;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.8rem;

  &::before {
    content: '•';
    color: #8b3dff;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`;

const UserResearch = () => {
  const [questions, setQuestions] = useState([{
    id: 1,
    type: 'multiple',
    question: '',
    options: ['']
  }]);

  const addQuestion = () => {
    setQuestions([...questions, {
      id: questions.length + 1,
      type: 'multiple',
      question: '',
      options: ['']
    }]);
  };

  const removeQuestion = (questionId) => {
    setQuestions(questions.filter(q => q.id !== questionId));
  };

  const addOption = (questionId) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          options: [...q.options, '']
        };
      }
      return q;
    }));
  };

  const removeOption = (questionId, optionIndex) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        const newOptions = q.options.filter((_, index) => index !== optionIndex);
        return {
          ...q,
          options: newOptions
        };
      }
      return q;
    }));
  };

  const handleQuestionChange = (questionId, value) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          question: value
        };
      }
      return q;
    }));
  };

  const handleOptionChange = (questionId, optionIndex, value) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        const newOptions = [...q.options];
        newOptions[optionIndex] = value;
        return {
          ...q,
          options: newOptions
        };
      }
      return q;
    }));
  };

  const handleTypeChange = (questionId, value) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          type: value,
          options: value === 'text' ? [] : q.options
        };
      }
      return q;
    }));
  };

  const handleSave = () => {
    console.log('Saving questions:', questions);
    // Add your save logic here
  };

  return (
    <UserResearchContainer>
      <Header>
        <Title>User Research</Title>
        <Button onClick={handleSave}>
          Save Form
        </Button>
      </Header>

      <InfoSection>
        <InfoTitle>Research Purpose</InfoTitle>
        <InfoText>
          This form builder helps create targeted research questionnaires that will be distributed among users to gather valuable insights for our company's strategic development.
        </InfoText>
        <InfoPoints>
          <InfoPoint>
            The responses will be analyzed to understand user behavior and preferences
          </InfoPoint>
          <InfoPoint>
            Results will help shape our product development and market strategies
          </InfoPoint>
          <InfoPoint>
            Data collected will be used to improve user experience and service quality
          </InfoPoint>
          <InfoPoint>
            All responses are confidential and will be used solely for research purposes
          </InfoPoint>
        </InfoPoints>
        <InfoText>
          Create your research questions below. Once saved, the form will be automatically formatted and distributed to the target audience through our research channels.
        </InfoText>
      </InfoSection>

      <FormBuilder>
        {questions.map((q, index) => (
          <QuestionCard key={q.id}>
            <QuestionHeader>
              <QuestionNumber>{index + 1}</QuestionNumber>
              <QuestionType
                value={q.type}
                onChange={(e) => handleTypeChange(q.id, e.target.value)}
              >
                <option value="multiple">Multiple Choice</option>
                <option value="text">Text Answer</option>
                <option value="checkbox">Checkbox</option>
              </QuestionType>
            </QuestionHeader>

            <QuestionInput
              placeholder="Enter your question"
              value={q.question}
              onChange={(e) => handleQuestionChange(q.id, e.target.value)}
            />

            {q.type !== 'text' && (
              <OptionsContainer>
                {q.options.map((option, optionIndex) => (
                  <OptionContainer key={optionIndex}>
                    <OptionNumber>{String.fromCharCode(65 + optionIndex)}.</OptionNumber>
                    <OptionInput
                      placeholder={`Option ${optionIndex + 1}`}
                      value={option}
                      onChange={(e) => handleOptionChange(q.id, optionIndex, e.target.value)}
                    />
                    {q.options.length > 1 && (
                      <RemoveButton onClick={() => removeOption(q.id, optionIndex)}>×</RemoveButton>
                    )}
                  </OptionContainer>
                ))}
                <Button secondary onClick={() => addOption(q.id)}>+ Add Option</Button>
              </OptionsContainer>
            )}

            <ActionButtons>
              <Button secondary onClick={() => removeQuestion(q.id)}>
                Delete Question
              </Button>
              <Button onClick={addQuestion}>
                + Add Question
              </Button>
            </ActionButtons>
          </QuestionCard>
        ))}

        <FormActions>
          <Button secondary onClick={addQuestion}>Add New Question</Button>
          <Button onClick={handleSave}>Save Form</Button>
        </FormActions>
      </FormBuilder>
    </UserResearchContainer>
  );
};

export default UserResearch;
