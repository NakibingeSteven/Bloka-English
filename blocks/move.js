// Block Definitions
Blockly.Blocks['move_up'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move Up");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Move the square up one cell");
  }
};

Blockly.Blocks['move_down'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move Down");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Move the square down one cell");
  }
};

Blockly.Blocks['move_left'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Move the square left one cell");
  }
};

Blockly.Blocks['move_right'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Move the square right one cell");
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



Blockly.Blocks['get_col'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Current Column");
    this.setOutput(true, "Number");
    this.setColour(160);
  }
};

Blockly.Blocks['get_total_rows'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Total Rows");
    this.setOutput(true, "Number");
    this.setColour(160);
  }
};

Blockly.Blocks['get_total_cols'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Total Columns");
    this.setOutput(true, "Number");
    this.setColour(160);
  }
};

Blockly.Blocks['start_history'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Start Recording History");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['stop_history'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Stop Recording History");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['retrace_path'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Retrace Path");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['set_keyboard_control'] = {
  init: function() {
    this.appendValueInput("KEY")
      .setCheck("String")
      .appendField("Set Keyboard Control");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(240);
  }
};

Blockly.Blocks['key_options'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["Arrow Keys", "ARROWS"],
        ["WASD", "WASD"],
        ["IJKL", "IJKL"]
      ]), "KEY_OPTION");
    this.setOutput(true, "String");
    this.setColour(240);
  }
};



Blockly.Blocks['mouse_options'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["Left Click", "LEFT"],
        ["Right Click", "RIGHT"],
        ["Middle Click", "MIDDLE"]
      ]), "MOUSE_OPTION");
    this.setOutput(true, "String");
    this.setColour(240);
  }
};

Blockly.Blocks['row_by_row'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move row by row");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['column_by_column'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move Column by Column");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['diagonal_path'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move Diagonally");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['outer_edge'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move Around Edge");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['spiral_inward'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Spiral Inward");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};


Blockly.Blocks['zigzag_pattern'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Zigzag Pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['checkerboard_pattern'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Checkerboard Pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['random_walk'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Random Walk")
      .appendField(new Blockly.FieldNumber(20, 1, 100), "STEPS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['snake_pattern'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Snake Pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['spiral_outward'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Spiral Outward");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['x_pattern'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("X Pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['corners_to_center'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Corners to Center");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['wave_pattern'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Wave Pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['diamond_pattern'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Diamond Pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['fibonacci_spiral'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Fibonacci Spiral");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['binary_tree'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Binary Tree Pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};

Blockly.Blocks['knight_tour'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Knight's Tour Pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
  }
};
