declare module "org.w3c.dom.Attr" {
import {$UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Element} from "org.w3c.dom.Element"
import {$Node, $Node$$Type, $Node$$Interface} from "org.w3c.dom.Node"
import {$Document} from "org.w3c.dom.Document"
import {$NamedNodeMap} from "org.w3c.dom.NamedNodeMap"
import {$NodeList} from "org.w3c.dom.NodeList"
import {$TypeInfo} from "org.w3c.dom.TypeInfo"

export interface $Attr$$Interface extends $Node$$Interface {
get "specified"(): boolean
get "ownerElement"(): $Element
get "schemaTypeInfo"(): $TypeInfo
get "id"(): boolean
get "name"(): StringJS
get "value"(): StringJS
set "value"(value: StringJS)
get "ownerDocument"(): $Document
get "namespaceURI"(): StringJS
set "prefix"(value: StringJS)
get "textContent"(): StringJS
set "textContent"(value: StringJS)
get "nodeType"(): short
get "localName"(): StringJS
get "lastChild"(): $Node
get "nodeName"(): StringJS
set "nodeValue"(value: StringJS)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): StringJS
get "baseURI"(): StringJS
get "attributes"(): $NamedNodeMap
get "prefix"(): StringJS
get "childNodes"(): $NodeList
}

export class $Attr implements $Attr$$Interface {
 "getSpecified"(): boolean
 "getOwnerElement"(): $Element
 "getSchemaTypeInfo"(): $TypeInfo
 "isId"(): boolean
 "getName"(): StringJS
 "getValue"(): StringJS
 "setValue"(arg0: StringJS): void
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "normalize"(): void
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "hasAttributes"(): boolean
 "getLocalName"(): StringJS
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getAttributes"(): $NamedNodeMap
 "getPrefix"(): StringJS
 "getChildNodes"(): $NodeList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attr$$Type = ($Attr);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Attr$$Original = $Attr;}
declare module "org.w3c.dom.Document" {
import {$UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Comment} from "org.w3c.dom.Comment"
import {$Element} from "org.w3c.dom.Element"
import {$Node, $Node$$Type, $Node$$Interface} from "org.w3c.dom.Node"
import {$Text} from "org.w3c.dom.Text"
import {$NamedNodeMap} from "org.w3c.dom.NamedNodeMap"
import {$DOMConfiguration} from "org.w3c.dom.DOMConfiguration"
import {$DocumentType} from "org.w3c.dom.DocumentType"
import {$DOMImplementation} from "org.w3c.dom.DOMImplementation"
import {$NodeList} from "org.w3c.dom.NodeList"
import {$Attr} from "org.w3c.dom.Attr"
import {$CDATASection} from "org.w3c.dom.CDATASection"
import {$EntityReference} from "org.w3c.dom.EntityReference"
import {$ProcessingInstruction} from "org.w3c.dom.ProcessingInstruction"
import {$DocumentFragment} from "org.w3c.dom.DocumentFragment"

export interface $Document$$Interface extends $Node$$Interface {
get "xmlEncoding"(): StringJS
get "xmlVersion"(): StringJS
get "xmlStandalone"(): boolean
get "doctype"(): $DocumentType
get "strictErrorChecking"(): boolean
get "inputEncoding"(): StringJS
get "domConfig"(): $DOMConfiguration
get "implementation"(): $DOMImplementation
set "xmlVersion"(value: StringJS)
set "strictErrorChecking"(value: boolean)
set "documentURI"(value: StringJS)
set "xmlStandalone"(value: boolean)
get "documentURI"(): StringJS
get "documentElement"(): $Element
get "ownerDocument"(): $Document
get "namespaceURI"(): StringJS
set "prefix"(value: StringJS)
get "textContent"(): StringJS
set "textContent"(value: StringJS)
get "nodeType"(): short
get "localName"(): StringJS
get "lastChild"(): $Node
get "nodeName"(): StringJS
set "nodeValue"(value: StringJS)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): StringJS
get "baseURI"(): StringJS
get "attributes"(): $NamedNodeMap
get "prefix"(): StringJS
get "childNodes"(): $NodeList
}

export class $Document implements $Document$$Interface {
 "importNode"(arg0: $Node$$Type, arg1: boolean): $Node
 "getXmlEncoding"(): StringJS
 "getXmlVersion"(): StringJS
 "getXmlStandalone"(): boolean
 "normalizeDocument"(): void
 "createDocumentFragment"(): $DocumentFragment
 "getDoctype"(): $DocumentType
 "getElementsByTagName"(arg0: StringJS): $NodeList
 "getStrictErrorChecking"(): boolean
 "getInputEncoding"(): StringJS
 "renameNode"(arg0: $Node$$Type, arg1: StringJS, arg2: StringJS): $Node
 "getDomConfig"(): $DOMConfiguration
 "adoptNode"(arg0: $Node$$Type): $Node
 "getElementById"(arg0: StringJS): $Element
 "getElementsByTagNameNS"(arg0: StringJS, arg1: StringJS): $NodeList
 "getImplementation"(): $DOMImplementation
 "createEntityReference"(arg0: StringJS): $EntityReference
 "setXmlVersion"(arg0: StringJS): void
 "createComment"(arg0: StringJS): $Comment
 "createProcessingInstruction"(arg0: StringJS, arg1: StringJS): $ProcessingInstruction
 "setStrictErrorChecking"(arg0: boolean): void
 "setDocumentURI"(arg0: StringJS): void
 "setXmlStandalone"(arg0: boolean): void
 "createCDATASection"(arg0: StringJS): $CDATASection
 "createTextNode"(arg0: StringJS): $Text
 "getDocumentURI"(): StringJS
 "createAttributeNS"(arg0: StringJS, arg1: StringJS): $Attr
 "createAttribute"(arg0: StringJS): $Attr
 "createElementNS"(arg0: StringJS, arg1: StringJS): $Element
 "createElement"(arg0: StringJS): $Element
 "getDocumentElement"(): $Element
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "normalize"(): void
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "hasAttributes"(): boolean
 "getLocalName"(): StringJS
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getAttributes"(): $NamedNodeMap
 "getPrefix"(): StringJS
 "getChildNodes"(): $NodeList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Document$$Type = ($Document);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Document$$Original = $Document;}
declare module "org.w3c.dom.TypeInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TypeInfo$$Interface {
get "typeNamespace"(): StringJS
get "typeName"(): StringJS
}

export class $TypeInfo implements $TypeInfo$$Interface {
static readonly "DERIVATION_UNION": integer
static readonly "DERIVATION_EXTENSION": integer
static readonly "DERIVATION_RESTRICTION": integer
static readonly "DERIVATION_LIST": integer

 "getTypeNamespace"(): StringJS
 "isDerivedFrom"(arg0: StringJS, arg1: StringJS, arg2: integer): boolean
 "getTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeInfo$$Type = ($TypeInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeInfo$$Original = $TypeInfo;}
declare module "org.w3c.dom.NamedNodeMap" {
import {$Node, $Node$$Type} from "org.w3c.dom.Node"

export interface $NamedNodeMap$$Interface {
set "namedItem"(value: $Node$$Type)
set "namedItemNS"(value: $Node$$Type)
get "length"(): integer
}

export class $NamedNodeMap implements $NamedNodeMap$$Interface {
 "getNamedItemNS"(arg0: StringJS, arg1: StringJS): $Node
 "item"(arg0: integer): $Node
 "removeNamedItemNS"(arg0: StringJS, arg1: StringJS): $Node
 "getNamedItem"(arg0: StringJS): $Node
 "setNamedItem"(arg0: $Node$$Type): $Node
 "setNamedItemNS"(arg0: $Node$$Type): $Node
 "getLength"(): integer
 "removeNamedItem"(arg0: StringJS): $Node
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedNodeMap$$Type = ($NamedNodeMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NamedNodeMap$$Original = $NamedNodeMap;}
declare module "org.w3c.dom.Node" {
import {$UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Document} from "org.w3c.dom.Document"
import {$NamedNodeMap} from "org.w3c.dom.NamedNodeMap"
import {$NodeList} from "org.w3c.dom.NodeList"

export interface $Node$$Interface {
get "ownerDocument"(): $Document
get "namespaceURI"(): StringJS
set "prefix"(value: StringJS)
get "textContent"(): StringJS
set "textContent"(value: StringJS)
get "nodeType"(): short
get "localName"(): StringJS
get "lastChild"(): $Node
get "nodeName"(): StringJS
set "nodeValue"(value: StringJS)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): StringJS
get "baseURI"(): StringJS
get "attributes"(): $NamedNodeMap
get "prefix"(): StringJS
get "childNodes"(): $NodeList
}

export class $Node implements $Node$$Interface {
static readonly "NOTATION_NODE": short
static readonly "ENTITY_REFERENCE_NODE": short
static readonly "CDATA_SECTION_NODE": short
static readonly "PROCESSING_INSTRUCTION_NODE": short
static readonly "ENTITY_NODE": short
static readonly "DOCUMENT_NODE": short
static readonly "COMMENT_NODE": short
static readonly "DOCUMENT_POSITION_CONTAINS": short
static readonly "DOCUMENT_POSITION_PRECEDING": short
static readonly "DOCUMENT_POSITION_DISCONNECTED": short
static readonly "DOCUMENT_POSITION_CONTAINED_BY": short
static readonly "ELEMENT_NODE": short
static readonly "DOCUMENT_TYPE_NODE": short
static readonly "DOCUMENT_FRAGMENT_NODE": short
static readonly "TEXT_NODE": short
static readonly "DOCUMENT_POSITION_FOLLOWING": short
static readonly "ATTRIBUTE_NODE": short
static readonly "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC": short

 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "normalize"(): void
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "hasAttributes"(): boolean
 "getLocalName"(): StringJS
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getAttributes"(): $NamedNodeMap
 "getPrefix"(): StringJS
 "getChildNodes"(): $NodeList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Node$$Type = ($Node);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Node$$Original = $Node;}
declare module "org.w3c.dom.UserDataHandler" {
import {$Node, $Node$$Type} from "org.w3c.dom.Node"

export interface $UserDataHandler$$Interface {

(arg0: short, arg1: StringJS, arg2: any, arg3: $Node, arg4: $Node): void
}

export class $UserDataHandler implements $UserDataHandler$$Interface {
static readonly "NODE_DELETED": short
static readonly "NODE_IMPORTED": short
static readonly "NODE_ADOPTED": short
static readonly "NODE_RENAMED": short
static readonly "NODE_CLONED": short

 "handle"(arg0: short, arg1: StringJS, arg2: any, arg3: $Node$$Type, arg4: $Node$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserDataHandler$$Type = ((arg0: short, arg1: StringJS, arg2: any, arg3: $Node, arg4: $Node) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UserDataHandler$$Original = $UserDataHandler;}
declare module "org.w3c.dom.NodeList" {
import {$Node} from "org.w3c.dom.Node"

export interface $NodeList$$Interface {
get "length"(): integer
}

export class $NodeList implements $NodeList$$Interface {
 "item"(arg0: integer): $Node
 "getLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeList$$Type = ($NodeList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NodeList$$Original = $NodeList;}
declare module "org.w3c.dom.Element" {
import {$UserDataHandler$$Type} from "org.w3c.dom.UserDataHandler"
import {$Attr, $Attr$$Type} from "org.w3c.dom.Attr"
import {$Node, $Node$$Type, $Node$$Interface} from "org.w3c.dom.Node"
import {$Document} from "org.w3c.dom.Document"
import {$NamedNodeMap} from "org.w3c.dom.NamedNodeMap"
import {$NodeList} from "org.w3c.dom.NodeList"
import {$TypeInfo} from "org.w3c.dom.TypeInfo"

export interface $Element$$Interface extends $Node$$Interface {
get "schemaTypeInfo"(): $TypeInfo
set "attributeNodeNS"(value: $Attr$$Type)
set "attributeNode"(value: $Attr$$Type)
get "tagName"(): StringJS
get "ownerDocument"(): $Document
get "namespaceURI"(): StringJS
set "prefix"(value: StringJS)
get "textContent"(): StringJS
set "textContent"(value: StringJS)
get "nodeType"(): short
get "localName"(): StringJS
get "lastChild"(): $Node
get "nodeName"(): StringJS
set "nodeValue"(value: StringJS)
get "parentNode"(): $Node
get "firstChild"(): $Node
get "nextSibling"(): $Node
get "previousSibling"(): $Node
get "nodeValue"(): StringJS
get "baseURI"(): StringJS
get "attributes"(): $NamedNodeMap
get "prefix"(): StringJS
get "childNodes"(): $NodeList
}

export class $Element implements $Element$$Interface {
 "removeAttributeNode"(arg0: $Attr$$Type): $Attr
 "getElementsByTagName"(arg0: StringJS): $NodeList
 "getElementsByTagNameNS"(arg0: StringJS, arg1: StringJS): $NodeList
 "getAttributeNS"(arg0: StringJS, arg1: StringJS): StringJS
 "removeAttributeNS"(arg0: StringJS, arg1: StringJS): void
 "setAttribute"(arg0: StringJS, arg1: StringJS): void
 "getAttribute"(arg0: StringJS): StringJS
 "removeAttribute"(arg0: StringJS): void
 "hasAttribute"(arg0: StringJS): boolean
 "hasAttributeNS"(arg0: StringJS, arg1: StringJS): boolean
 "setIdAttributeNS"(arg0: StringJS, arg1: StringJS, arg2: boolean): void
 "getSchemaTypeInfo"(): $TypeInfo
 "setAttributeNodeNS"(arg0: $Attr$$Type): $Attr
 "setAttributeNode"(arg0: $Attr$$Type): $Attr
 "setIdAttributeNode"(arg0: $Attr$$Type, arg1: boolean): void
 "getAttributeNodeNS"(arg0: StringJS, arg1: StringJS): $Attr
 "getAttributeNode"(arg0: StringJS): $Attr
 "setAttributeNS"(arg0: StringJS, arg1: StringJS, arg2: StringJS): void
 "setIdAttribute"(arg0: StringJS, arg1: boolean): void
 "getTagName"(): StringJS
 "getFeature"(arg0: StringJS, arg1: StringJS): any
 "normalize"(): void
 "getOwnerDocument"(): $Document
 "replaceChild"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "hasChildNodes"(): boolean
 "getNamespaceURI"(): StringJS
 "setPrefix"(arg0: StringJS): void
 "compareDocumentPosition"(arg0: $Node$$Type): short
 "getTextContent"(): StringJS
 "setTextContent"(arg0: StringJS): void
 "isSameNode"(arg0: $Node$$Type): boolean
 "lookupPrefix"(arg0: StringJS): StringJS
 "isDefaultNamespace"(arg0: StringJS): boolean
 "lookupNamespaceURI"(arg0: StringJS): StringJS
 "isEqualNode"(arg0: $Node$$Type): boolean
 "getUserData"(arg0: StringJS): any
 "setUserData"(arg0: StringJS, arg1: any, arg2: $UserDataHandler$$Type): any
 "getNodeType"(): short
 "hasAttributes"(): boolean
 "getLocalName"(): StringJS
 "appendChild"(arg0: $Node$$Type): $Node
 "getLastChild"(): $Node
 "getNodeName"(): StringJS
 "removeChild"(arg0: $Node$$Type): $Node
 "setNodeValue"(arg0: StringJS): void
 "getParentNode"(): $Node
 "getFirstChild"(): $Node
 "cloneNode"(arg0: boolean): $Node
 "getNextSibling"(): $Node
 "getPreviousSibling"(): $Node
 "getNodeValue"(): StringJS
 "insertBefore"(arg0: $Node$$Type, arg1: $Node$$Type): $Node
 "getBaseURI"(): StringJS
 "isSupported"(arg0: StringJS, arg1: StringJS): boolean
 "getAttributes"(): $NamedNodeMap
 "getPrefix"(): StringJS
 "getChildNodes"(): $NodeList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$$Type = ($Element);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Element$$Original = $Element;}
