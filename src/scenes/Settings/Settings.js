import React from 'react';
import { Box, Button, Label, Input, Message } from 'rebass';
import { Card } from '../../components';

const Settings = ({ workingTime, restingTime, onChangeField, onSubmit }) => (
  <Card title="Settings">
    <Message>Sus datos se han guardado correctamente</Message>
    <Box p={4}>
      <Box mb={3}>
        <Label>Tiempo trabajo</Label>
        <input
          type="number"
          value={workingTime}
          onChange={onChangeField}
          name="workingTime"
        />
      </Box>
      <Box mb={3}>
        <Label>Tiempo descanso</Label>
        <input
          type="number"
          value={restingTime}
          onChange={onChangeField}
          name="restingTime"
        />
      </Box>
      <Button bg="success" color="white" fontSize={3} onClick={onSubmit}>
        Guardar
      </Button>
    </Box>
  </Card>
);

export default Settings;
