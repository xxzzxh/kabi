var schemaschema = 
  [
    {
      "meta": {
        "name": "多选框",
        "ui_widget": "checkbox",
        "icon": "checkbox"
      },
      "ui_widget": "checkbox",
      "base_type": "array",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "多选框"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "array"
          },
          "enums": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 1,
            "maxItems": 10,
            "title": "选项",
            "description": "",
            "default": []
          }
        },
          "default": {
            "title": "默认值",
            "description": "",
            "default": [],
            "type": "array"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "checkbox"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最大选择项目",
            "description": "",
            "default": 3
          },
          "minItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最小选择项目",
            "description": "",
            "default": 1
          },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxItems",
          "minItems",
          "enums"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "多选框",
          "ui_widget": "checkbox",
          "icon": "checkbox"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "下拉选择",
        "ui_widget": "dropdown",
        "icon": "dropdown"
      },
      "ui_widget": "dropdown",
      "base_type": "array",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "下拉选择"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "array"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": [],
            "type": "array"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "dropdown"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最大选择项目",
            "description": "",
            "default": 3
          },
          "minItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最小选择项目",
            "description": "",
            "default": 1
          },
          "enums": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 1,
            "maxItems": 10,
            "title": "选项",
            "description": "",
            "default": []
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxItems",
          "minItems",
          "enums"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "下拉选择",
          "ui_widget": "dropdown",
          "icon": "dropdown"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "选择",
        "ui_widget": "array",
        "icon": "array",
        "abstract": true
      },
      "ui_widget": "array",
      "base_type": "array",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "选择"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "array"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": [],
            "type": "array"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "array"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最大选择项目",
            "description": "",
            "default": 3
          },
          "minItems": {
            "type": "integer",
            "minimum": 0,
            "maximum": 10,
            "title": "最小选择项目",
            "description": "",
            "default": 1
          },
          "enums": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 1,
            "maxItems": 10,
            "title": "选项",
            "description": "",
            "default": []
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxItems",
          "minItems",
          "enums"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "选择",
          "ui_widget": "array",
          "icon": "array",
          "abstract": true
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "单选框",
        "ui_widget": "radio",
        "icon": "radio"
      },
      "ui_widget": "radio",
      "base_type": "array",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "单选框"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "array"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": [],
            "type": "array"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "radio"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最大选择项目",
            "description": "",
            "default": 3
          },
          "minItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最小选择项目",
            "description": "",
            "default": 1
          },
          "enums": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 1,
            "maxItems": 10,
            "title": "选项",
            "description": "",
            "default": []
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxItems",
          "minItems",
          "enums"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "单选框",
          "ui_widget": "radio",
          "icon": "radio"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "tab选择",
        "ui_widget": "tab",
        "icon": "tab"
      },
      "ui_widget": "tab",
      "base_type": "array",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "tab选择"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "array"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": [],
            "type": "array"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "tab"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最大选择项目",
            "description": "",
            "default": 3
          },
          "minItems": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10,
            "title": "最小选择项目",
            "description": "",
            "default": 1
          },
          "enums": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 1,
            "maxItems": 10,
            "title": "选项",
            "description": "",
            "default": []
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxItems",
          "minItems",
          "enums"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "tab选择",
          "ui_widget": "tab",
          "icon": "tab"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "数字",
        "ui_widget": "number",
        "icon": "number",
        "abstract": true
      },
      "ui_widget": "number",
      "base_type": "number",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "数字"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "number"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": 0,
            "type": "number"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "number"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "ui_integer": {
            "type": "boolean",
            "title": "是否整数",
            "description": ""
          },
          "maximum": {
            "type": "number",
            "title": "最大值",
            "description": ""
          },
          "minimum": {
            "type": "number",
            "title": "最小值",
            "description": ""
          },
          "multipleOf": {
            "type": "number",
            "title": "被该数整除",
            "description": ""
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "ui_integer",
          "maximum",
          "minimum"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "数字",
          "ui_widget": "number",
          "icon": "number",
          "abstract": true
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "星级评分",
        "ui_widget": "rate",
        "icon": "rate"
      },
      "ui_widget": "rate",
      "base_type": "number",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "星级评分"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "number"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": 0,
            "type": "number"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "rate"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "ui_integer": {
            "type": "boolean",
            "title": "是否整数",
            "description": ""
          },
          "maximum": {
            "type": "number",
            "title": "最大值",
            "description": "",
            "const": 5
          },
          "minimum": {
            "type": "number",
            "title": "最小值",
            "description": "",
            "const": 0
          },
          "multipleOf": {
            "type": "number",
            "title": "被该数整除",
            "description": ""
          },
          "ui_can_half": {
            "type": "boolean",
            "title": "允许半星",
            "description": "",
            "default": true
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "ui_integer",
          "maximum",
          "minimum",
          "ui_can_half"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "星级评分",
          "ui_widget": "rate",
          "icon": "rate"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "滑块",
        "ui_widget": "slider",
        "icon": "slider"
      },
      "ui_widget": "slider",
      "base_type": "number",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "滑块"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "number"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": 0,
            "type": "number"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "slider"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "ui_integer": {
            "type": "boolean",
            "title": "是否整数",
            "description": ""
          },
          "maximum": {
            "type": "number",
            "title": "最大值",
            "description": ""
          },
          "minimum": {
            "type": "number",
            "title": "最小值",
            "description": ""
          },
          "multipleOf": {
            "type": "number",
            "title": "被该数整除",
            "description": ""
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "ui_integer",
          "maximum",
          "minimum"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "滑块",
          "ui_widget": "slider",
          "icon": "slider"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "日期",
        "ui_widget": "format-date",
        "icon": "date"
      },
      "ui_widget": "format-date",
      "base_type": "string",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "日期"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "string"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": "",
            "type": "string"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "format-date"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxLength": {
            "type": "number",
            "title": "最大长度",
            "description": "",
            "default": 255,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "minLength": {
            "type": "number",
            "title": "最小长度",
            "description": "",
            "default": 1,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "format": {
            "type": "string",
            "title": "类型",
            "const": "date"
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxLength",
          "minLength",
          "format"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "日期",
          "ui_widget": "format-date",
          "icon": "date"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "邮箱",
        "ui_widget": "format-email",
        "icon": "email"
      },
      "ui_widget": "format-email",
      "base_type": "string",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "邮箱"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "string"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": "",
            "type": "string"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "format-email"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxLength": {
            "type": "number",
            "title": "最大长度",
            "description": "",
            "default": 255,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "minLength": {
            "type": "number",
            "title": "最小长度",
            "description": "",
            "default": 1,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "format": {
            "type": "string",
            "title": "类型",
            "const": "email"
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxLength",
          "minLength",
          "format"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "邮箱",
          "ui_widget": "format-email",
          "icon": "email"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "手机号",
        "ui_widget": "format-mobile-number",
        "icon": "fa-mobile"
      },
      "ui_widget": "format-mobile-number",
      "base_type": "string",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "手机号"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "string"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": "",
            "type": "string"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "format-mobile-number"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxLength": {
            "type": "number",
            "title": "最大长度",
            "description": "",
            "default": 255,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "minLength": {
            "type": "number",
            "title": "最小长度",
            "description": "",
            "default": 1,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "format": {
            "type": "string",
            "title": "类型",
            "const": "mobile-number"
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxLength",
          "minLength",
          "format"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "手机号",
          "ui_widget": "format-mobile-number",
          "icon": "fa-mobile"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "字符串",
        "ui_widget": "string",
        "icon": "string",
        "abstract": true
      },
      "ui_widget": "string",
      "base_type": "string",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "字符串"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "string"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": "",
            "type": "string"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "string"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxLength": {
            "type": "number",
            "title": "最大长度",
            "description": "",
            "default": 255,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "minLength": {
            "type": "number",
            "title": "最小长度",
            "description": "",
            "default": 1,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxLength",
          "minLength"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "字符串",
          "ui_widget": "string",
          "icon": "string",
          "abstract": true
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "密码",
        "ui_widget": "password",
        "icon": "password"
      },
      "ui_widget": "password",
      "base_type": "string",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "密码"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "string"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": "",
            "type": "string"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "password"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxLength": {
            "type": "number",
            "title": "最大长度",
            "description": "",
            "default": 255,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "minLength": {
            "type": "number",
            "title": "最小长度",
            "description": "",
            "default": 1,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxLength",
          "minLength"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "密码",
          "ui_widget": "password",
          "icon": "password"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "文本",
        "ui_widget": "text",
        "icon": "text"
      },
      "ui_widget": "text",
      "base_type": "string",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "文本"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "string"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": "",
            "type": "string"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "text"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxLength": {
            "type": "number",
            "title": "最大长度",
            "description": "",
            "default": 255,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "minLength": {
            "type": "number",
            "title": "最小长度",
            "description": "",
            "default": 1,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxLength",
          "minLength"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "文本",
          "ui_widget": "text",
          "icon": "text"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "文本(正则验证)",
        "ui_widget": "text_regex",
        "icon": "text_regex"
      },
      "ui_widget": "text_regex",
      "base_type": "string",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "文本(正则验证)"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "string"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": "",
            "type": "string"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "text_regex"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxLength": {
            "type": "number",
            "title": "最大长度",
            "description": "",
            "default": 255,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "minLength": {
            "type": "number",
            "title": "最小长度",
            "description": "",
            "default": 1,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "pattern": {
            "type": "string",
            "format": "regex",
            "title": "正则表达式",
            "description": "",
            "default": ""
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxLength",
          "minLength",
          "pattern"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "文本(正则验证)",
          "ui_widget": "text_regex",
          "icon": "text_regex"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    },
    {
      "meta": {
        "name": "多行文本",
        "ui_widget": "textarea",
        "icon": "textarea"
      },
      "ui_widget": "textarea",
      "base_type": "string",
      "schema_schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30,
            "title": "标题",
            "description": "",
            "default": "多行文本"
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 255,
            "title": "描述",
            "description": "",
            "default": ""
          },
          "type": {
            "type": "string",
            "title": "值类型",
            "description": "",
            "const": "string"
          },
          "default": {
            "title": "默认值",
            "description": "",
            "default": "",
            "type": "string"
          },
          "ui_widget": {
            "type": "string",
            "title": "控件类型",
            "description": "",
            "const": "textarea"
          },
          "ui_required": {
            "type": "boolean",
            "title": "是否必填",
            "description": "",
            "default": true
          },
          "ui_key": {
            "type": "string",
            "title": "字段名",
            "description": ""
          },
          "ui_icon": {
            "type": "string",
            "minLength": 0,
            "maxLength": 20,
            "title": "图标名",
            "description": "",
            "default": ""
          },
          "maxLength": {
            "type": "number",
            "title": "最大长度",
            "description": "",
            "default": 255,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "minLength": {
            "type": "number",
            "title": "最小长度",
            "description": "",
            "default": 1,
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          }
        },
        "required": [
          "title",
          "description",
          "type",
          "default",
          "ui_widget",
          "ui_required",
          "ui_key",
          "ui_icon",
          "maxLength",
          "minLength"
        ],
        "additionalProperties": false,
        "meta": {
          "name": "多行文本",
          "ui_widget": "textarea",
          "icon": "textarea"
        },
        "definitions": {
          "length": {
            "type": "number",
            "multipleOf": 1,
            "minimum": 1,
            "maximum": 1000
          },
          "integer": {
            "type": "number",
            "multipleOf": 1
          }
        }
      }
    }
  ]

module.exports = {    //数据暴露出去
  schemaschema: schemaschema
}