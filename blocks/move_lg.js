
Blockly.Msg.MOVE_UP = 'Genda Wagulu';
Blockly.Msg.MOVE_DOWN = 'Genda Wansi';
Blockly.Msg.MOVE_BACKWARD = 'Inyuma';
Blockly.Msg.MOVE_LEFT = 'Genda Ku Kkono';
Blockly.Msg.MOVE_RIGHT = 'Genda ku Ddyo';
Blockly.Msg.STOP_BLOCK = 'KOMAWO';

Blockly.Blocks['move_up'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_UP);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Move the square up one cell");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_DOWN);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Move the square down one cell");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_LEFT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("Move the square left one cell");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("Move the square right one cell");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.STOP_BLOCK);
        this.setPreviousStatement(true, null);
        this.setColour(0);
    }
};

Blockly.Blocks['wait_block'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Wait")
          .appendField(new Blockly.FieldNumber(1, 0, 10), "SECONDS");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(120);
    }
  };

  Blockly.Blocks['set_home'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set Home Position")
          .appendField("Row:")
          .appendField(new Blockly.FieldNumber(0), "ROW")
          .appendField("Col:")
          .appendField(new Blockly.FieldNumber(0), "COL");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(160);
    }
  };