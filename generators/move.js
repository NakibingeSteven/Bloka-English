 // Generate JavaScript code for custom blocks
 Blockly.JavaScript['move_up'] = function(block) {
  return 'moveUp();\n';
};

Blockly.JavaScript['move_down'] = function(block) {
  return 'moveDown();\n';
};

Blockly.JavaScript['move_left'] = function(block) {
  return 'moveLeft();\n';
};

Blockly.JavaScript['move_right'] = function(block) {
  return 'moveRight();\n';
};

 // Block code generators
 Blockly.JavaScript['wait_block'] = function(block) {
  const seconds = block.getFieldValue('SECONDS');
  return `await new Promise(resolve => setTimeout(resolve, ${seconds * 1000}));\n`;
};

Blockly.JavaScript['set_home'] = function(block) {
  const row = block.getFieldValue('ROW');
  const col = block.getFieldValue('COL');
  return `state.currentRow = ${row};\nstate.currentCol = ${col};\ndrawGrid();\n`;
};

Blockly.JavaScript['get_row'] = function(block) {
  return ['state.currentRow', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['get_col'] = function(block) {
  return ['state.currentCol', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['get_total_rows'] = function(block) {
  return ['state.rows', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['get_total_cols'] = function(block) {
  return ['state.cols', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['start_history'] = function(block) {
  return 'state.isRecording = true;\nstate.history = [];\n';
};

Blockly.JavaScript['stop_history'] = function(block) {
  return 'state.isRecording = false;\n';
};

Blockly.JavaScript['retrace_path'] = function(block) {
  return `
    for (let i = state.history.length - 1; i >= 0; i--) {
      await new Promise(resolve => {
        state.currentRow = state.history[i].row;
        state.currentCol = state.history[i].col;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
  `;
};

Blockly.JavaScript['set_keyboard_control'] = function(block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return `state.keyboardControls = ${key};\n`;
};

Blockly.JavaScript['key_options'] = function(block) {
  const option = block.getFieldValue('KEY_OPTION');
  return ['"' + option + '"', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_mouse_control'] = function(block) {
  const button = Blockly.JavaScript.valueToCode(block, 'BUTTON', Blockly.JavaScript.ORDER_ATOMIC);
  return `state.mouseControls = ${button};\n`;
};

Blockly.JavaScript['mouse_options'] = function(block) {
  const option = block.getFieldValue('MOUSE_OPTION');
  return ['"' + option + '"', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['row_by_row'] = function(block) {
  return `
    const moves = rowByRow();
    for (const move of moves) {
      await new Promise(resolve => {
        state.currentRow = move.row;
        state.currentCol = move.col;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
  `;
};

Blockly.JavaScript['column_by_column'] = function(block) {
  return `
    const moves = columnByColumn();
    for (const move of moves) {
      await new Promise(resolve => {
        state.currentRow = move.row;
        state.currentCol = move.col;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
  `;
};

Blockly.JavaScript['diagonal_path'] = function(block) {
  return `
    for (let i = 0; i < Math.min(state.rows, state.cols); i++) {
      await new Promise(resolve => {
        state.currentRow = i;
        state.currentCol = i;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
  `;
};

Blockly.JavaScript['outer_edge'] = function(block) {
  return `
    // Top edge
    for (let col = 0; col < state.cols; col++) {
      await new Promise(resolve => {
        state.currentRow = 0;
        state.currentCol = col;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
    // Right edge
    for (let row = 1; row < state.rows; row++) {
      await new Promise(resolve => {
        state.currentRow = row;
        state.currentCol = state.cols - 1;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
    // Bottom edge
    for (let col = state.cols - 2; col >= 0; col--) {
      await new Promise(resolve => {
        state.currentRow = state.rows - 1;
        state.currentCol = col;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
    // Left edge
    for (let row = state.rows - 2; row > 0; row--) {
      await new Promise(resolve => {
        state.currentRow = row;
        state.currentCol = 0;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
  `;
};

Blockly.JavaScript['spiral_inward'] = function(block) {
  return `
    const moves = spiralInward();
    for (const move of moves) {
      await new Promise(resolve => {
        state.currentRow = move.row;
        state.currentCol = move.col;
        drawGrid();
        setTimeout(resolve, 100);
      });
    }
  `;
};


Blockly.JavaScript['zigzag_pattern'] = function(block) {
  return `
    for (let row = 0; row < state.rows; row++) {
      if (row % 2 === 0) {
        for (let col = 0; col < state.cols; col++) {
          await moveToPosition(row, col);
        }
      } else {
        for (let col = state.cols - 1; col >= 0; col--) {
          await moveToPosition(row, col);
        }
      }
    }
  `;
};

Blockly.JavaScript['checkerboard_pattern'] = function(block) {
  return `
    for (let row = 0; row < state.rows; row++) {
      for (let col = 0; col < state.cols; col++) {
        if ((row + col) % 2 === 0) {
          await moveToPosition(row, col);
        }
      }
    }
    for (let row = 0; row < state.rows; row++) {
      for (let col = 0; col < state.cols; col++) {
        if ((row + col) % 2 === 1) {
          await moveToPosition(row, col);
        }
      }
    }
  `;
};

Blockly.JavaScript['random_walk'] = function(block) {
  const steps = block.getFieldValue('STEPS');
  return `
    for (let i = 0; i < ${steps}; i++) {
      const directions = [
        {dr: -1, dc: 0}, // up
        {dr: 1, dc: 0},  // down
        {dr: 0, dc: -1}, // left
        {dr: 0, dc: 1}   // right
      ];
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const newRow = Math.min(Math.max(0, state.currentRow + direction.dr), state.rows - 1);
      const newCol = Math.min(Math.max(0, state.currentCol + direction.dc), state.cols - 1);
      await moveToPosition(newRow, newCol);
    }
  `;
};

Blockly.JavaScript['snake_pattern'] = function(block) {
  return `
    let direction = 1;
    for (let row = 0; row < state.rows; row++) {
      if (direction === 1) {
        for (let col = 0; col < state.cols; col++) {
          await moveToPosition(row, col);
        }
      } else {
        for (let col = state.cols - 1; col >= 0; col--) {
          await moveToPosition(row, col);
        }
      }
      direction *= -1;
    }
  `;
};

Blockly.JavaScript['spiral_outward'] = function(block) {
  return `
    const centerRow = Math.floor(state.rows / 2);
    const centerCol = Math.floor(state.cols / 2);
    let layer = 0;
    
    while (layer <= Math.max(centerRow, centerCol)) {
      // Top edge
      for (let col = centerCol - layer; col <= centerCol + layer; col++) {
        if (col >= 0 && col < state.cols && centerRow - layer >= 0) {
          await moveToPosition(centerRow - layer, col);
        }
      }
      // Right edge
      for (let row = centerRow - layer + 1; row <= centerRow + layer; row++) {
        if (row >= 0 && row < state.rows && centerCol + layer < state.cols) {
          await moveToPosition(row, centerCol + layer);
        }
      }
      // Bottom edge
      for (let col = centerCol + layer - 1; col >= centerCol - layer; col--) {
        if (col >= 0 && col < state.cols && centerRow + layer < state.rows) {
          await moveToPosition(centerRow + layer, col);
        }
      }
      // Left edge
      for (let row = centerRow + layer - 1; row >= centerRow - layer + 1; row--) {
        if (row >= 0 && row < state.rows && centerCol - layer >= 0) {
          await moveToPosition(row, centerCol - layer);
        }
      }
      layer++;
    }
  `;
};

Blockly.JavaScript['x_pattern'] = function(block) {
  return `
    // Main diagonal
    for (let i = 0; i < Math.min(state.rows, state.cols); i++) {
      await moveToPosition(i, i);
    }
    // Secondary diagonal
    for (let i = 0; i < Math.min(state.rows, state.cols); i++) {
      await moveToPosition(i, state.cols - 1 - i);
    }
  `;
};

Blockly.JavaScript['corners_to_center'] = function(block) {
  return `
    // Top-left to center
    for (let i = 0; i <= Math.floor(Math.min(state.rows, state.cols) / 2); i++) {
      await moveToPosition(i, i);
    }
    // Top-right to center
    for (let i = 0; i <= Math.floor(Math.min(state.rows, state.cols) / 2); i++) {
      await moveToPosition(i, state.cols - 1 - i);
    }
    // Bottom-left to center
    for (let i = 0; i <= Math.floor(Math.min(state.rows, state.cols) / 2); i++) {
      await moveToPosition(state.rows - 1 - i, i);
    }
    // Bottom-right to center
    for (let i = 0; i <= Math.floor(Math.min(state.rows, state.cols) / 2); i++) {
      await moveToPosition(state.rows - 1 - i, state.cols - 1 - i);
    }
  `;
};

Blockly.JavaScript['wave_pattern'] = function(block) {
  return `
    const amplitude = Math.min(Math.floor(state.rows / 2), 2);
    for (let col = 0; col < state.cols; col++) {
      const centerRow = Math.floor(state.rows / 2);
      const offset = Math.floor(amplitude * Math.sin(col * Math.PI / 4));
      for (let delta = -amplitude; delta <= amplitude; delta++) {
        const row = centerRow + delta;
        if (row >= 0 && row < state.rows) {
          await moveToPosition(row, col);
        }
      }
    }
  `;
};

Blockly.JavaScript['diamond_pattern'] = function(block) {
  return `
    const centerRow = Math.floor(state.rows / 2);
    const centerCol = Math.floor(state.cols / 2);
    const maxRadius = Math.min(centerRow, centerCol);
    
    for (let radius = 0; radius <= maxRadius; radius++) {
      // Top
      await moveToPosition(centerRow - radius, centerCol);
      // Right
      await moveToPosition(centerRow, centerCol + radius);
      // Bottom
      await moveToPosition(centerRow + radius, centerCol);
      // Left
      await moveToPosition(centerRow, centerCol - radius);
      
      // Diagonals
      for (let i = 1; i < radius; i++) {
        // Top-right
        await moveToPosition(centerRow - radius + i, centerCol + i);
        // Bottom-right
        await moveToPosition(centerRow + i, centerCol + radius - i);
        // Bottom-left
        await moveToPosition(centerRow + radius - i, centerCol - i);
        // Top-left
        await moveToPosition(centerRow - i, centerCol - radius + i);
      }
    }
  `;
};

Blockly.JavaScript['fibonacci_spiral'] = function(block) {
  return `
    function getFibonacci(n) {
      if (n <= 1) return 1;
      let a = 1, b = 1;
      for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
      }
      return b;
    }
    
    const centerRow = Math.floor(state.rows / 2);
    const centerCol = Math.floor(state.cols / 2);
    let currentDir = 0; // 0: right, 1: down, 2: left, 3: up
    let currentRow = centerRow;
    let currentCol = centerCol;
    
    for (let i = 0; i < 8; i++) {
      const steps = getFibonacci(i);
      for (let j = 0; j < steps; j++) {
        if (currentRow >= 0 && currentRow < state.rows && 
            currentCol >= 0 && currentCol < state.cols) {
          await moveToPosition(currentRow, currentCol);
        }
        switch (currentDir) {
          case 0: currentCol++; break;
          case 1: currentRow++; break;
          case 2: currentCol--; break;
          case 3: currentRow--; break;
        }
      }
      currentDir = (currentDir + 1) % 4;
    }
  `;
};

Blockly.JavaScript['binary_tree'] = function(block) {
  return `
    // Start from root (top center)
    const rootCol = Math.floor(state.cols / 2);
    await moveToPosition(0, rootCol);
    
    // Create binary tree pattern
    for (let level = 1; level < state.rows; level++) {
      const nodesInLevel = Math.min(Math.pow(2, level), state.cols);
      const spacing = Math.floor(state.cols / (nodesInLevel + 1));
      
      for (let node = 0; node < nodesInLevel; node++) {
        const col = spacing * (node + 1);
        if (col < state.cols) {
          await moveToPosition(level, col);
        }
      }
    }
  `;
};

Blockly.JavaScript['knight_tour'] = function(block) {
  return `
    const knightMoves = [
      {dr: -2, dc: -1}, {dr: -2, dc: 1},
      {dr: -1, dc: -2}, {dr: -1, dc: 2},
      {dr: 1, dc: -2}, {dr: 1, dc: 2},
      {dr: 2, dc: -1}, {dr: 2, dc: 1}
    ];
    
    const visited = new Set();
    let row = 0, col = 0;
    
    for (let moves = 0; moves < state.rows * state.cols; moves++) {
      await moveToPosition(row, col);
      visited.add(row + ',' + col);
      
      // Find next valid move
      let validMoves = knightMoves
        .map(move => ({
          row: row + move.dr,
          col: col + move.dc,
          valid: row + move.dr >= 0 && row + move.dr < state.rows &&
                 col + move.dc >= 0 && col + move.dc < state.cols &&
                 !visited.has((row + move.dr) + ',' + (col + move.dc))
        }))
        .filter(move => move.valid);
      
      if (validMoves.length === 0) break;
      
      // Choose move with fewest next moves (Warnsdorff's rule)
      const nextMove = validMoves.reduce((best, current) => {
        const nextMoves = knightMoves.filter(move => {
          const nextRow = current.row + move.dr;
          const nextCol = current.col + move.dc;
          return nextRow >= 0 && nextRow < state.rows &&
                 nextCol >= 0 && nextCol < state.cols &&
                 !visited.has(nextRow + ',' + nextCol);
        }).length;
        
        if (!best || nextMoves < best.nextMoves) {
          return { ...current, nextMoves };
        }
        return best;
      }, null);
      
      if (!nextMove) break;
      row = nextMove.row;
      col = nextMove.col;
    }
  `;
};