const ColorServo = '#b077d1';
const SERVO_PINS = [
  ['S1', '0'],
  ['S2', '1'],
  ['S3', '2'],
  ['S4', '3'],
  ['S5', '4'],
  ['S6', '5'],
  ['S7', '6'],
  ['S8', '7'],
];
const SERVO_MAX_ANGLES = [
  ['180°', '180'],
  ['270°', '270'],
  ['360°', '360'],
];

function servoDeclareImport() {
  Blockly.Python.definitions_['import_xbot_servo_control'] =
    'from xbot_servo_control import *';
}

Blockly.Blocks['configure_servo'] = {
  init: function () {
    this.jsonInit({
      type: 'configure_servo',
      message0: Blockly.Msg.XBOT_SERVO_CONTROL_CONFIGURE_SERVO_MESSAGE,
      args0: [
        {
          type: 'field_dropdown',
          name: 'pin',
          options: SERVO_PINS,
        },
        {
          type: 'field_dropdown',
          name: 'max_angle',
          options: SERVO_MAX_ANGLES,
        },
        {
          type: 'input_value',
          name: 'initial_angle',
          check: 'Number',
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: ColorServo,
      tooltip: Blockly.Msg.XBOT_SERVO_CONTROL_CONFIGURE_SERVO_TOOLTIP,
      helpUrl: ''
    });
  }
};

Blockly.Python['configure_servo'] = function (block) {
  servoDeclareImport();
  var pin = block.getFieldValue('pin');
  var maxAngle = block.getFieldValue('max_angle');
  var initialAngle = Blockly.Python.valueToCode(
    block, 'initial_angle', Blockly.Python.ORDER_ATOMIC) || '90';
  return 'configure_servo(' + pin + ', ' + maxAngle + ', ' + initialAngle + ')\n';
};

Blockly.Blocks['set_servo'] = {
  init: function () {
    this.jsonInit({
      type: 'set_servo',
      message0: Blockly.Msg.XBOT_SERVO_CONTROL_SET_SERVO_MESSAGE,
      args0: [
        {
          type: 'field_dropdown',
          name: 'pin',
          options: SERVO_PINS,
        },
        {
          type: 'input_value',
          name: 'angle',
          check: 'Number',
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: ColorServo,
      tooltip: Blockly.Msg.XBOT_SERVO_CONTROL_SET_SERVO_TOOLTIP,
      helpUrl: ''
    });
  }
};

Blockly.Python['set_servo'] = function (block) {
  servoDeclareImport();
  var pin = block.getFieldValue('pin');
  var angle = Blockly.Python.valueToCode(
    block, 'angle', Blockly.Python.ORDER_ATOMIC);
  return 'set_servo(' + pin + ', ' + angle + ')\n';
};

Blockly.Blocks['servo_position'] = {
  init: function () {
    this.jsonInit({
      type: 'servo_position',
      message0: Blockly.Msg.XBOT_SERVO_CONTROL_SERVO_POSITION_MESSAGE,
      args0: [
        {
          type: 'field_dropdown',
          name: 'pin',
          options: SERVO_PINS,
        },
        {
          type: 'input_value',
          name: 'angle',
          check: 'Number',
        },
        {
          type: 'input_value',
          name: 'speed',
          check: 'Number',
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: ColorServo,
      tooltip: Blockly.Msg.XBOT_SERVO_CONTROL_SERVO_POSITION_TOOLTIP,
      helpUrl: ''
    });
  }
};

Blockly.Python['servo_position'] = function (block) {
  servoDeclareImport();
  var pin = block.getFieldValue('pin');
  var angle = Blockly.Python.valueToCode(
    block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(
    block, 'speed', Blockly.Python.ORDER_ATOMIC);
  return 'set_servo_position(' + pin + ', ' + angle + ', ' + speed + ')\n';
};

Blockly.Blocks['servo_move'] = {
  init: function () {
    this.jsonInit({
      type: 'servo_move',
      message0: Blockly.Msg.XBOT_SERVO_CONTROL_SERVO_MOVE_MESSAGE,
      args0: [
        {
          type: 'input_value',
          name: 'angle',
          check: 'Number',
        },
        {
          type: 'field_dropdown',
          name: 'pin',
          options: SERVO_PINS,
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: ColorServo,
      tooltip: Blockly.Msg.XBOT_SERVO_CONTROL_SERVO_MOVE_TOOLTIP,
      helpUrl: ''
    });
  }
};

Blockly.Python['servo_move'] = function (block) {
  servoDeclareImport();
  var pin = block.getFieldValue('pin');
  var angle = Blockly.Python.valueToCode(
    block, 'angle', Blockly.Python.ORDER_ATOMIC);
  return 'move_servo_position(' + pin + ', ' + angle + ')\n';
};

Blockly.Blocks['servo_current_position'] = {
  init: function () {
    this.jsonInit({
      type: 'servo_current_position',
      message0: Blockly.Msg.XBOT_SERVO_CONTROL_CURRENT_POSITION_MESSAGE,
      args0: [
        {
          type: 'field_dropdown',
          name: 'pin',
          options: SERVO_PINS,
        }
      ],
      inputsInline: true,
      output: 'Number',
      colour: ColorServo,
      tooltip: Blockly.Msg.XBOT_SERVO_CONTROL_CURRENT_POSITION_TOOLTIP,
      helpUrl: ''
    });
  }
};

Blockly.Python['servo_current_position'] = function (block) {
  servoDeclareImport();
  var pin = block.getFieldValue('pin');
  return ['current_position(' + pin + ')', Blockly.Python.ORDER_FUNCTION_CALL];
};
