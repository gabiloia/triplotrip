import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http from 'node:http';
import https from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize$2(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const nameValuePairStr = parts.shift() || "";
  const parsed = _parseNameValuePair(nameValuePairStr);
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires": {
        cookie.expires = new Date(partValue);
        break;
      }
      case "max-age": {
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      }
      case "secure": {
        cookie.secure = true;
        break;
      }
      case "httponly": {
        cookie.httpOnly = true;
        break;
      }
      case "samesite": {
        cookie.sameSite = partValue;
        break;
      }
      default: {
        cookie[partKey] = partValue;
      }
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}};const c$1=class c{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=g(e._destroy,t._destroy);}};function _(){return Object.assign(c$1.prototype,i$1.prototype),Object.assign(c$1.prototype,l$1.prototype),c$1}function g(...n){return function(...e){for(const t of n)t(...e);}}const m=_();class A extends m{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function S(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const C=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(C.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function O(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:S(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function getDistinctCookieKey(name, opts) {
  return [name, opts.domain || "", opts.path || "/"].join(";");
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions = {}) {
  if (!serializeOptions.path) {
    serializeOptions = { path: "/", ...serializeOptions };
  }
  const newCookie = serialize$2(name, value, serializeOptions);
  const currentCookies = splitCookiesString(
    event.node.res.getHeader("set-cookie")
  );
  if (currentCookies.length === 0) {
    event.node.res.setHeader("set-cookie", newCookie);
    return;
  }
  const newCookieKey = getDistinctCookieKey(name, serializeOptions);
  event.node.res.removeHeader("set-cookie");
  for (const cookie of currentCookies) {
    const parsed = parseSetCookie(cookie);
    const key = getDistinctCookieKey(parsed.name, parsed);
    if (key === newCookieKey) {
      continue;
    }
    event.node.res.appendHeader("set-cookie", cookie);
  }
  event.node.res.appendHeader("set-cookie", newCookie);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch({ fetch, Headers: Headers$1, AbortController });
const $fetch = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c().serialize(o)}const c=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (serialize$1(object1) === serialize$1(object2)) {
    return true;
  }
  return false;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "2b301646-f35c-498e-ae7b-176163bab8ff",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "piniaPluginPersistedstate": {
      "key": "__persisted__%id"
    },
    "device": {
      "defaultUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
      "enabled": true,
      "refreshOnResize": false
    },
    "strapi": {
      "url": "https://admin.triplotrip.com",
      "prefix": "/api",
      "admin": "/admin",
      "version": "v5",
      "cookie": {},
      "auth": {},
      "cookieName": "strapi_jwt",
      "devtools": false
    },
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "",
      "defaultDirection": "ltr",
      "strategy": "prefix_except_default",
      "lazy": false,
      "rootRedirect": "",
      "routesNameSeparator": "___",
      "defaultLocaleRouteNameSuffix": "default",
      "skipSettingLocaleOnNavigate": false,
      "differentDomains": false,
      "trailingSlash": false,
      "locales": [],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "switchLocalePathLinkSSR": false,
        "autoImportTranslationFunctions": false,
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "generatedLocaleFilePathFormat": "absolute",
        "alternateLinkCanonicalQueries": false,
        "hmr": true
      },
      "multiDomainLocales": false
    }
  },
  "strapi": {
    "url": "https://admin.triplotrip.com",
    "prefix": "/api",
    "admin": "/admin",
    "version": "v5",
    "cookie": {},
    "auth": {},
    "cookieName": "strapi_jwt",
    "devtools": false
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const plugins = [
  
];

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"2176-AXTLXMTn1OR0rtdJFdX5sBNMa9s\"",
    "mtime": "2025-06-22T18:13:03.446Z",
    "size": 8566,
    "path": "../public/favicon.ico"
  },
  "/Fav_16x16.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"8f6-Edx6fBFd0970z6ABP8yAbVToAwY\"",
    "mtime": "2025-06-22T18:11:53.819Z",
    "size": 2294,
    "path": "../public/Fav_16x16.ico"
  },
  "/Fav_32x32.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"2176-AXTLXMTn1OR0rtdJFdX5sBNMa9s\"",
    "mtime": "2025-06-22T18:12:36.441Z",
    "size": 8566,
    "path": "../public/Fav_32x32.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"5f-Lh0IrM4z1tPu/ybZw5ge6HHVgkk\"",
    "mtime": "2025-07-02T03:34:17.991Z",
    "size": 95,
    "path": "../public/index.html"
  },
  "/logo.jpg": {
    "type": "image/jpeg",
    "etag": "\"bce1-0e6KYkSVrztJZFTa/7OQbSSd6bg\"",
    "mtime": "2025-05-29T23:11:38.010Z",
    "size": 48353,
    "path": "../public/logo.jpg"
  },
  "/og_preview.jpg": {
    "type": "image/jpeg",
    "etag": "\"184ca-zOrSy5GReQxnkzHLndKd9+EfAEw\"",
    "mtime": "2025-05-29T23:11:37.998Z",
    "size": 99530,
    "path": "../public/og_preview.jpg"
  },
  "/tw_preview.jpg": {
    "type": "image/jpeg",
    "etag": "\"18682-P97ykOvEC8hP6dEKiqFir0bx3K8\"",
    "mtime": "2025-05-29T23:11:37.992Z",
    "size": 99970,
    "path": "../public/tw_preview.jpg"
  },
  "/images/avatar-200.jpg": {
    "type": "image/jpeg",
    "etag": "\"172f-tizezz5Wv1qrSXPxhReRqe6g8lk\"",
    "mtime": "2025-06-22T15:31:22.381Z",
    "size": 5935,
    "path": "../public/images/avatar-200.jpg"
  },
  "/images/avatar-64.jpg": {
    "type": "image/jpeg",
    "etag": "\"10b1-EtVSWoI4Qiuyu9O2sEa+F39Ipzs\"",
    "mtime": "2025-06-22T15:31:58.944Z",
    "size": 4273,
    "path": "../public/images/avatar-64.jpg"
  },
  "/images/headphones.jpg": {
    "type": "image/jpeg",
    "etag": "\"59f9-8rEXPo0VyT52Y7qfQdeg0jCNbMM\"",
    "mtime": "2025-05-29T23:11:38.057Z",
    "size": 23033,
    "path": "../public/images/headphones.jpg"
  },
  "/images/logo-1.png": {
    "type": "image/png",
    "etag": "\"c09-4eCC/GzjrGoo3oicte1o8whPHhs\"",
    "mtime": "2025-05-29T23:11:38.051Z",
    "size": 3081,
    "path": "../public/images/logo-1.png"
  },
  "/images/logo-2.png": {
    "type": "image/png",
    "etag": "\"78c-j28W4cQW/0gm5Qhk9wh1W/TSmdM\"",
    "mtime": "2025-05-29T23:11:38.042Z",
    "size": 1932,
    "path": "../public/images/logo-2.png"
  },
  "/_nuxt/0VvChTA9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ab2-Lgz40tvRoU2gGXJuel5whB3gWYE\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 10930,
    "path": "../public/_nuxt/0VvChTA9.js"
  },
  "/_nuxt/1sU52Rsf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f04-Sy7Bz53clUmBqVFj3WeNIvvRPP0\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 7940,
    "path": "../public/_nuxt/1sU52Rsf.js"
  },
  "/_nuxt/2JWiSdrp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"835-1zleU3aCfrwUEjlXwE29SUKpiAY\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 2101,
    "path": "../public/_nuxt/2JWiSdrp.js"
  },
  "/_nuxt/3TG0XOE5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cba6-IPhPyDVHft2BSuzrLsdT5jVRIk0\"",
    "mtime": "2025-07-02T03:32:57.255Z",
    "size": 52134,
    "path": "../public/_nuxt/3TG0XOE5.js"
  },
  "/_nuxt/3wH9bMCi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cf4-JiZt7U3waYTNTutWSWkgtQIXA6k\"",
    "mtime": "2025-07-02T03:32:57.152Z",
    "size": 3316,
    "path": "../public/_nuxt/3wH9bMCi.js"
  },
  "/_nuxt/4Xusbl9y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"269-Y7Kcq9jIhfm/UTNaL2PrffzQq9M\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 617,
    "path": "../public/_nuxt/4Xusbl9y.js"
  },
  "/_nuxt/6CTi3yHo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7896-iRf7Bz676v6Nnf3iYhIl7oTqikI\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 30870,
    "path": "../public/_nuxt/6CTi3yHo.js"
  },
  "/_nuxt/6g1IjhSK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9a3-5mfDb1d8N0ZTUBfENcCN3TrF/uo\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 2467,
    "path": "../public/_nuxt/6g1IjhSK.js"
  },
  "/_nuxt/7fbfr75a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cfb-RBVJW4L09w9kblUflzfRPNvNBA4\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 7419,
    "path": "../public/_nuxt/7fbfr75a.js"
  },
  "/_nuxt/7hLkLozY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20d48-lF94xN6RJHuTs7O2ZsLZt6t4gNw\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 134472,
    "path": "../public/_nuxt/7hLkLozY.js"
  },
  "/_nuxt/7IVPPlUN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e97de-fTOSLQfYOzVQFZhD3Bf6C7tIvPY\"",
    "mtime": "2025-07-02T03:32:57.211Z",
    "size": 956382,
    "path": "../public/_nuxt/7IVPPlUN.js"
  },
  "/_nuxt/8AeiNKKV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1636-G5l5hxLVafCpxcMia8ML37/zQ48\"",
    "mtime": "2025-07-02T03:32:57.096Z",
    "size": 5686,
    "path": "../public/_nuxt/8AeiNKKV.js"
  },
  "/_nuxt/8UG_-NoX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f1b-9ow0+1M9Ec6fvF8e7WaTR+Dg4ak\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 7963,
    "path": "../public/_nuxt/8UG_-NoX.js"
  },
  "/_nuxt/9oX2Jtt-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ae-ua01miCLd3HRxrPzi4Sz2CVvCTs\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 686,
    "path": "../public/_nuxt/9oX2Jtt-.js"
  },
  "/_nuxt/Affix.CrARltJo.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"136-UT6OW/mH7GjgevhMLp7v8AJRF0k\"",
    "mtime": "2025-07-02T03:32:57.016Z",
    "size": 310,
    "path": "../public/_nuxt/Affix.CrARltJo.css"
  },
  "/_nuxt/Analytics.cs2_JB7N.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"459-aHohGl4yUFQgqYxKbyCYfzHDCxY\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 1113,
    "path": "../public/_nuxt/Analytics.cs2_JB7N.css"
  },
  "/_nuxt/apexchart-override.CL18HaiH.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ef-wiIqw8XDl354E9umyJ47/G8khxU\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 495,
    "path": "../public/_nuxt/apexchart-override.CL18HaiH.css"
  },
  "/_nuxt/ApexCharts.Bek6zGMm.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-JaQSrjqsJeSTaydst6F9HbrLYUM\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 62,
    "path": "../public/_nuxt/ApexCharts.Bek6zGMm.css"
  },
  "/_nuxt/AuthForm.Kz-Ywo1e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"125-EFmuJ2hRMOJdaQcqrj6l6wEs1EQ\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 293,
    "path": "../public/_nuxt/AuthForm.Kz-Ywo1e.css"
  },
  "/_nuxt/B-Z2kk8f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"494-IVIn2mtq/kgoh1KdG0B581GRwak\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 1172,
    "path": "../public/_nuxt/B-Z2kk8f.js"
  },
  "/_nuxt/B0FEZ2b2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12fd-Q/0i4Bl75C5clA/gFVHSx2qKynA\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 4861,
    "path": "../public/_nuxt/B0FEZ2b2.js"
  },
  "/_nuxt/B0Iy6aas.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"325-QZQxGkJS3SRHJWWH3kgbUSiffjk\"",
    "mtime": "2025-07-02T03:32:57.226Z",
    "size": 805,
    "path": "../public/_nuxt/B0Iy6aas.js"
  },
  "/_nuxt/B4dT9m52.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"394c-A9xEbzBNqbET/RD8OfpEzsXM/l4\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 14668,
    "path": "../public/_nuxt/B4dT9m52.js"
  },
  "/_nuxt/B4GuKGNh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a0-qMYKdA4Va6j3mYyuUXbNqTJOsQY\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 160,
    "path": "../public/_nuxt/B4GuKGNh.js"
  },
  "/_nuxt/B4ioZqRh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"942-Yvlen99IFItHjfL/YK1ZP9rl4pw\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 2370,
    "path": "../public/_nuxt/B4ioZqRh.js"
  },
  "/_nuxt/B5CIRCK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36b-GeFHNqbrmv9olkIOyMZHGw/Vxfs\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 875,
    "path": "../public/_nuxt/B5CIRCK5.js"
  },
  "/_nuxt/B5LZSdlf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"701-YKSHk9nywJWoYGUT00HNTgct5nQ\"",
    "mtime": "2025-07-02T03:32:57.211Z",
    "size": 1793,
    "path": "../public/_nuxt/B5LZSdlf.js"
  },
  "/_nuxt/B5nUqDz3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4b80-5kYknS6oaZIc/+5/9hN35D/pl5w\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 19328,
    "path": "../public/_nuxt/B5nUqDz3.js"
  },
  "/_nuxt/B6gIYU75.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"352f-XpviKy6OjBFcfdY9IdW3Q+hL1sY\"",
    "mtime": "2025-07-02T03:32:57.085Z",
    "size": 13615,
    "path": "../public/_nuxt/B6gIYU75.js"
  },
  "/_nuxt/B6L0HXUm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"de7-U1xLItR4TVWDa7i9iQ1NymtQF8A\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 3559,
    "path": "../public/_nuxt/B6L0HXUm.js"
  },
  "/_nuxt/B6NV2d2m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dcb-bPyHVFmQkI33l1+FFMoh1pLX/5g\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 3531,
    "path": "../public/_nuxt/B6NV2d2m.js"
  },
  "/_nuxt/B6_ATXom.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"303-Jk9+WwUoL6MX7fZ8ZRlDqEqjpGI\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 771,
    "path": "../public/_nuxt/B6_ATXom.js"
  },
  "/_nuxt/B7Mr_IpF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"efe-9TgcFUt8XjKhW2rXaNv4QnF9AO4\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 3838,
    "path": "../public/_nuxt/B7Mr_IpF.js"
  },
  "/_nuxt/B7WXlprl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"304-cBtccJYuHyKom86XDRwmvE/uIXU\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 772,
    "path": "../public/_nuxt/B7WXlprl.js"
  },
  "/_nuxt/B8uwi6_L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11dc-ZMekxQoWbNWuDf99T/sD02KKUY8\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 4572,
    "path": "../public/_nuxt/B8uwi6_L.js"
  },
  "/_nuxt/B8y5p3xO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b7-/y+E73RGMWYJW1cdCc8YsoyPou4\"",
    "mtime": "2025-07-02T03:32:57.150Z",
    "size": 1463,
    "path": "../public/_nuxt/B8y5p3xO.js"
  },
  "/_nuxt/B9c47494.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"917-MIrM154ZMSJ6T/QKAVAIkX8J+po\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 2327,
    "path": "../public/_nuxt/B9c47494.js"
  },
  "/_nuxt/BA2UjEHd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"615a-ryqi/dkq0H9TZXlK8U+WOIj0a0U\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 24922,
    "path": "../public/_nuxt/BA2UjEHd.js"
  },
  "/_nuxt/BaPjJFij.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"132a5-Lm/fMj/83EZenM6i2ZKYP4pC94g\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 78501,
    "path": "../public/_nuxt/BaPjJFij.js"
  },
  "/_nuxt/Base.C6Q3A_P6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"70-78+dZdHUiSma6PGOd4z6NhIgdQE\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 112,
    "path": "../public/_nuxt/Base.C6Q3A_P6.css"
  },
  "/_nuxt/Base.D0DJFyGC.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"205-bksBe4cVi0+c9s4ERJVbISrhqB4\"",
    "mtime": "2025-07-02T03:32:57.016Z",
    "size": 517,
    "path": "../public/_nuxt/Base.D0DJFyGC.css"
  },
  "/_nuxt/Basic.Bk8N7J6d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"491-d7V7ZB+0cW66Ce+WBQHfIWTMdYc\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 1169,
    "path": "../public/_nuxt/Basic.Bk8N7J6d.css"
  },
  "/_nuxt/Bb7LLFPR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12e9-0OMxpNpxB2duW+/Qpkd+3Dvt0Ks\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 4841,
    "path": "../public/_nuxt/Bb7LLFPR.js"
  },
  "/_nuxt/BbR7fbNL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4eee-uU/7BMu/f6PwddU7TCy/7gRi/c0\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 20206,
    "path": "../public/_nuxt/BbR7fbNL.js"
  },
  "/_nuxt/BC0GA07O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6ae-kfZ2jGKC8H9CDBYAULrAZ2yTmY4\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 1710,
    "path": "../public/_nuxt/BC0GA07O.js"
  },
  "/_nuxt/BC26X5xm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54d-sGq7oQsubjxAA9D/9uuNooRG3s0\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 1357,
    "path": "../public/_nuxt/BC26X5xm.js"
  },
  "/_nuxt/BcvzFAvs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6f41-naq6oR81+yp7zr7EL9pQLAaZlQM\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 28481,
    "path": "../public/_nuxt/BcvzFAvs.js"
  },
  "/_nuxt/BdBI1-JM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1700-IQ11DbVXjLzhzbM0kj8DlJY3r0I\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 5888,
    "path": "../public/_nuxt/BdBI1-JM.js"
  },
  "/_nuxt/BDpgMqMp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b53-zrQ64ZaJaoZT8tVM87ppuOj7sd0\"",
    "mtime": "2025-07-02T03:32:57.096Z",
    "size": 6995,
    "path": "../public/_nuxt/BDpgMqMp.js"
  },
  "/_nuxt/BDXvX1xU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11ca-+cditsbyYFd+84c/qh4lqP13XnM\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 4554,
    "path": "../public/_nuxt/BDXvX1xU.js"
  },
  "/_nuxt/Be2Vs2B1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d8-R4IeGZA0wNOqYOl3Yb73C8oEvwU\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 216,
    "path": "../public/_nuxt/Be2Vs2B1.js"
  },
  "/_nuxt/BGEpmv_x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"403-AfdZxCRKeaVYMrHdnE0E4SGd6q8\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 1027,
    "path": "../public/_nuxt/BGEpmv_x.js"
  },
  "/_nuxt/BgqJwYJB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"454-MSOHqc4jcyDkD3VGO9lfpAuHFcM\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 1108,
    "path": "../public/_nuxt/BgqJwYJB.js"
  },
  "/_nuxt/BGSkmTX0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10f-VwUWmJYvOie0fDLVjolOK4v4cJI\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 271,
    "path": "../public/_nuxt/BGSkmTX0.js"
  },
  "/_nuxt/BHhRbaip.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fa-FV1mFIDfy9LuY6t8TgJSUwmNXUI\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 762,
    "path": "../public/_nuxt/BHhRbaip.js"
  },
  "/_nuxt/BITcnRQC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0a-er7bUnxUKLoyD9wSEiow2FAYitk\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 3338,
    "path": "../public/_nuxt/BITcnRQC.js"
  },
  "/_nuxt/BJAPMcOO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18d6-NGFC3uQtKP21v7gRw4MWE7D1aiI\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 6358,
    "path": "../public/_nuxt/BJAPMcOO.js"
  },
  "/_nuxt/BjpnXkvI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"de3-jti305YIW/mkHxYRrZOEzWB8P9k\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 3555,
    "path": "../public/_nuxt/BjpnXkvI.js"
  },
  "/_nuxt/BjyUHhTu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d5-tritQ+yAetfvZTuQGLTcIK275dk\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 213,
    "path": "../public/_nuxt/BjyUHhTu.js"
  },
  "/_nuxt/BkKNMtXg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b43-9OCHUVyOaVP+XoYahBw7TAxJhjA\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 11075,
    "path": "../public/_nuxt/BkKNMtXg.js"
  },
  "/_nuxt/BKyc6iBC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"167-iDI/hMbSAWUUgZ9rnTMxjFeVF68\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 359,
    "path": "../public/_nuxt/BKyc6iBC.js"
  },
  "/_nuxt/Bk_rJcZu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-nOfU5mgxjjfjfGzbkr9VXZzOrp4\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 91,
    "path": "../public/_nuxt/Bk_rJcZu.js"
  },
  "/_nuxt/BlIJOPPC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11fc-kHSDbIGJ9xMLRdOKPwvC1xEKHf4\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 4604,
    "path": "../public/_nuxt/BlIJOPPC.js"
  },
  "/_nuxt/BmdOpTOG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ec-lN9HHXY78/z+sKcrchjahboxHSE\"",
    "mtime": "2025-07-02T03:32:57.246Z",
    "size": 748,
    "path": "../public/_nuxt/BmdOpTOG.js"
  },
  "/_nuxt/Bmfhnye5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19e0-pTq1A6zEBwYak9Mz5I6r2JQ9qkw\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 6624,
    "path": "../public/_nuxt/Bmfhnye5.js"
  },
  "/_nuxt/BMwUx3Op.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bf-/tCwcDtaQsnfEzU+r6kFLYpLkx8\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 703,
    "path": "../public/_nuxt/BMwUx3Op.js"
  },
  "/_nuxt/BNPBGq8C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2633-yBuvD4BWHxnF7ooAW8SnR9kAp10\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 9779,
    "path": "../public/_nuxt/BNPBGq8C.js"
  },
  "/_nuxt/BnQFsihP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"431-H1dCJOyN5lrY8PVmri61hvV7UaM\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 1073,
    "path": "../public/_nuxt/BnQFsihP.js"
  },
  "/_nuxt/Bnzol_bc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"113-kyHV4QyDRcPDllhpeMJIWvZjnqQ\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 275,
    "path": "../public/_nuxt/Bnzol_bc.js"
  },
  "/_nuxt/BOKkhINF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13e8-dP6cbDXeFHSwFP1msWTOccxSnVI\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 5096,
    "path": "../public/_nuxt/BOKkhINF.js"
  },
  "/_nuxt/Botxz2t0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3773-mGt1acQ7ptgyNHvNYXGl0tdHAAU\"",
    "mtime": "2025-07-02T03:32:57.070Z",
    "size": 14195,
    "path": "../public/_nuxt/Botxz2t0.js"
  },
  "/_nuxt/BoWlrKSZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"de7-Ha3/fGPxAeKj9m6MgO+8DPiCwGo\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 3559,
    "path": "../public/_nuxt/BoWlrKSZ.js"
  },
  "/_nuxt/BpinXsy-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e3d-4ZHva6DgSi8KzpgHORFb197tDKs\"",
    "mtime": "2025-07-02T03:32:57.096Z",
    "size": 20029,
    "path": "../public/_nuxt/BpinXsy-.js"
  },
  "/_nuxt/BPjN37dn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e3b-hWKNVEe8nF8lIor9vFQjpG44DhA\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 3643,
    "path": "../public/_nuxt/BPjN37dn.js"
  },
  "/_nuxt/BqA2BWR2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10d4-5UiLmKM+1kyEFW8oW9FcGMBZZ9I\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 4308,
    "path": "../public/_nuxt/BqA2BWR2.js"
  },
  "/_nuxt/BrabEFvg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a7-bXQMQFH76BHWJhj8FjyZ7AwFemg\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 167,
    "path": "../public/_nuxt/BrabEFvg.js"
  },
  "/_nuxt/brain-icon-2.DK6oaCrj.svg": {
    "type": "image/svg+xml",
    "etag": "\"1112-NTWEXNOHxzOiU0HhlyA95OOZI6g\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 4370,
    "path": "../public/_nuxt/brain-icon-2.DK6oaCrj.svg"
  },
  "/_nuxt/brain-icon.D3BfQBbS.svg": {
    "type": "image/svg+xml",
    "etag": "\"1976-cOHBrsFPtSgHJSD+Bi9YEbHMSyQ\"",
    "mtime": "2025-07-02T03:32:56.912Z",
    "size": 6518,
    "path": "../public/_nuxt/brain-icon.D3BfQBbS.svg"
  },
  "/_nuxt/brand-logo_dark.B9YyNiIZ.svg": {
    "type": "image/svg+xml",
    "etag": "\"1452-P8ihwr49jQXl+kwbF1qgnir6zuQ\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 5202,
    "path": "../public/_nuxt/brand-logo_dark.B9YyNiIZ.svg"
  },
  "/_nuxt/BrEUlnuo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1060-K5QMEZ+0m9qe9BAbklRsp7bY35o\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 4192,
    "path": "../public/_nuxt/BrEUlnuo.js"
  },
  "/_nuxt/BRY1QPg9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12a-HzxZLjYr1g4Lg4VFW6+L4cjekuw\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 298,
    "path": "../public/_nuxt/BRY1QPg9.js"
  },
  "/_nuxt/BsPYsmAS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22e1-gkt3Gr+Es1IR2jZBIcH7M5+tK38\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 8929,
    "path": "../public/_nuxt/BsPYsmAS.js"
  },
  "/_nuxt/BTCm5O9U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"338-3ose7Qv0zOHXPBcCAD3HkN0XFN4\"",
    "mtime": "2025-07-02T03:32:57.211Z",
    "size": 824,
    "path": "../public/_nuxt/BTCm5O9U.js"
  },
  "/_nuxt/BuExw2kF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d8e-VQ/l+sn6YAUiiu34mQlCSb2ZwDg\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 7566,
    "path": "../public/_nuxt/BuExw2kF.js"
  },
  "/_nuxt/BUrEn1b-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"70798-4SrWLCBX6vCqOko19g842MTdd2E\"",
    "mtime": "2025-07-02T03:32:57.096Z",
    "size": 460696,
    "path": "../public/_nuxt/BUrEn1b-.js"
  },
  "/_nuxt/BvIWGtJg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"301-K2W0hnsJ2JJ/kAtimeV/hLl2fw0\"",
    "mtime": "2025-07-02T03:32:57.096Z",
    "size": 769,
    "path": "../public/_nuxt/BvIWGtJg.js"
  },
  "/_nuxt/BvvfjN-O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ee-KTU0NykuIJlCawSUI74Z0N099e8\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 750,
    "path": "../public/_nuxt/BvvfjN-O.js"
  },
  "/_nuxt/BVYlda65.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41a-/irNciX2aQzZ0uZXR74J/ChsNMg\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 1050,
    "path": "../public/_nuxt/BVYlda65.js"
  },
  "/_nuxt/BWZJXDWa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"150a-Uqe3TqsJkCOp99Kx7c8SgSK8oZ0\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 5386,
    "path": "../public/_nuxt/BWZJXDWa.js"
  },
  "/_nuxt/BxU8ZWK_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"44f3b-TT23ZwGsSGv/tfIuxF9YSzylZV0\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 282427,
    "path": "../public/_nuxt/BxU8ZWK_.js"
  },
  "/_nuxt/BYH1PO-Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24f8-AtH2P4YikTtiqwxOI/vwN4lVQL8\"",
    "mtime": "2025-07-02T03:32:57.164Z",
    "size": 9464,
    "path": "../public/_nuxt/BYH1PO-Q.js"
  },
  "/_nuxt/BYqbt-v3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b3b-rhj8gSsFqfQBNHhMqqvITv3J/QE\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 2875,
    "path": "../public/_nuxt/BYqbt-v3.js"
  },
  "/_nuxt/BZ5qzZ2D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8fd-qmWLr5RN9UVg90dhks8zWyYL8Bw\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 2301,
    "path": "../public/_nuxt/BZ5qzZ2D.js"
  },
  "/_nuxt/BzAwI9Rr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"201d4-yVW4CQ9mmU+W/s6oDJjkLY26uuc\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 131540,
    "path": "../public/_nuxt/BzAwI9Rr.js"
  },
  "/_nuxt/BZR1JZHS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e4f-s6TRK0s/PEDkjT+g+gB1fak/Rws\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 28239,
    "path": "../public/_nuxt/BZR1JZHS.js"
  },
  "/_nuxt/B_-DWI7N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1249-TQhZL2wSvFA99G0Dn7t0z9QhVGs\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 4681,
    "path": "../public/_nuxt/B_-DWI7N.js"
  },
  "/_nuxt/B_Ej9MSI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3117-+A3u8HGn0Qtu5TYbF5uhpY3eXKo\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 12567,
    "path": "../public/_nuxt/B_Ej9MSI.js"
  },
  "/_nuxt/C-d01h29.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"49e-v7cVQn69wdl2OGKwxhvRJNd3XVs\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 1182,
    "path": "../public/_nuxt/C-d01h29.js"
  },
  "/_nuxt/C-kCoUmH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21dc-qRZV7R1ycReM0eMvZ6ES3xRNMjc\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 8668,
    "path": "../public/_nuxt/C-kCoUmH.js"
  },
  "/_nuxt/C0j8XtJx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"533-NTmQF/ZOjpw+4u2XeXVPiTmnS9c\"",
    "mtime": "2025-07-02T03:32:57.164Z",
    "size": 1331,
    "path": "../public/_nuxt/C0j8XtJx.js"
  },
  "/_nuxt/C0rF9HtR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"304-aCxyYObEU01+5KMjPQKSlfOWuRk\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 772,
    "path": "../public/_nuxt/C0rF9HtR.js"
  },
  "/_nuxt/C1VNYRu2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b7d-7IqRaX7wXVmBKKQiC1XPSfjp0Mg\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 27517,
    "path": "../public/_nuxt/C1VNYRu2.js"
  },
  "/_nuxt/C2161hUv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b9-oe/fSluxHWe4In2K67wYLhkF6Gk\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 185,
    "path": "../public/_nuxt/C2161hUv.js"
  },
  "/_nuxt/C23WDkay.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cae-+qeEMZlAe9oAlUj7+qH3QYJo8Fg\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 3246,
    "path": "../public/_nuxt/C23WDkay.js"
  },
  "/_nuxt/C2b94jgh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8ca-T/Q1Uosbs3/v3uKlh99AFjvm4Uo\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 2250,
    "path": "../public/_nuxt/C2b94jgh.js"
  },
  "/_nuxt/C2eJqgqv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7db-sJriJD5q2dV0lEGFeC08mKiMJGk\"",
    "mtime": "2025-07-02T03:32:57.258Z",
    "size": 2011,
    "path": "../public/_nuxt/C2eJqgqv.js"
  },
  "/_nuxt/C2MgXZnk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f01-8yGq9nH7jPNEgR0xBo0oNhPvP4w\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 3841,
    "path": "../public/_nuxt/C2MgXZnk.js"
  },
  "/_nuxt/C4pttxBp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24a09-p4dNu4rNThl81+yfJxYFjuXYy9I\"",
    "mtime": "2025-07-02T03:32:57.258Z",
    "size": 150025,
    "path": "../public/_nuxt/C4pttxBp.js"
  },
  "/_nuxt/C4xKlrAk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"774-oKRMhccDnEHxTcPck1NvyGcnJ2E\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 1908,
    "path": "../public/_nuxt/C4xKlrAk.js"
  },
  "/_nuxt/C73JGb5y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e6-INKX7fVHc7uj48B2kALT5056zPQ\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 2278,
    "path": "../public/_nuxt/C73JGb5y.js"
  },
  "/_nuxt/C74fwXv_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"79a-iq3THXk8g19HeZCuvev8k7Zp89I\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 1946,
    "path": "../public/_nuxt/C74fwXv_.js"
  },
  "/_nuxt/C88HIQo7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1931-xQonMN0U29MNur29EtMvx/Ww3Zg\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 6449,
    "path": "../public/_nuxt/C88HIQo7.js"
  },
  "/_nuxt/C98TrqGX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"687e-FvI0lfg3dN0h9+7ubIpSo5iNrYg\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 26750,
    "path": "../public/_nuxt/C98TrqGX.js"
  },
  "/_nuxt/C9eE4UE3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2836-yR7cBWPpVsISqcYzxrJNNZuGI8k\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 10294,
    "path": "../public/_nuxt/C9eE4UE3.js"
  },
  "/_nuxt/CAIJBU55.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ac7-yLJYTdUW2aXRx8rdxOKw6o2wTUc\"",
    "mtime": "2025-07-02T03:32:57.164Z",
    "size": 2759,
    "path": "../public/_nuxt/CAIJBU55.js"
  },
  "/_nuxt/CAJrK2mA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"567-JPFHjfLCccUGefcVkhks1icNP+s\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 1383,
    "path": "../public/_nuxt/CAJrK2mA.js"
  },
  "/_nuxt/CardCodeExample.CVXLRVB-.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"500-+wYxJeB7zut6K0mrQC1vKLrj37w\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 1280,
    "path": "../public/_nuxt/CardCodeExample.CVXLRVB-.css"
  },
  "/_nuxt/CardCombo3.07_sVqCe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e94-jiHIwTShUjiusuVOpXE/LoHe0us\"",
    "mtime": "2025-07-02T03:32:57.012Z",
    "size": 3732,
    "path": "../public/_nuxt/CardCombo3.07_sVqCe.css"
  },
  "/_nuxt/CardCombo5.DP70WOQo.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d4b-qEHN4Nq+Pl4A9rnpZD9BCE7whyI\"",
    "mtime": "2025-07-02T03:32:57.012Z",
    "size": 3403,
    "path": "../public/_nuxt/CardCombo5.DP70WOQo.css"
  },
  "/_nuxt/CardExtra5.CHDkpMms.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"134-t9o07LI4MYCiAyIHjxkOvFTqvmw\"",
    "mtime": "2025-07-02T03:32:57.012Z",
    "size": 308,
    "path": "../public/_nuxt/CardExtra5.CHDkpMms.css"
  },
  "/_nuxt/CardExtra6.Yl4Aa5g8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a1-TAyN0BA8g3D/m6USbysQ1Jh0q8E\"",
    "mtime": "2025-07-02T03:32:57.014Z",
    "size": 161,
    "path": "../public/_nuxt/CardExtra6.Yl4Aa5g8.css"
  },
  "/_nuxt/CardWrapper.C0Z-sLgl.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c9-zxU6x9LcfcdTHsaoW18lJAjPwD0\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 713,
    "path": "../public/_nuxt/CardWrapper.C0Z-sLgl.css"
  },
  "/_nuxt/Carousel.CBdnW-nN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d-CUiEdLoz40RMjAwVXxDvWWm96+o\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 93,
    "path": "../public/_nuxt/Carousel.CBdnW-nN.css"
  },
  "/_nuxt/CaWK9F_s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11d2-MwomrWyrao56j10tj6ycEWzq5IE\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 4562,
    "path": "../public/_nuxt/CaWK9F_s.js"
  },
  "/_nuxt/Cb9X-eNS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4ad-bpH4i9nm5jHrETsSgSDkFALueYM\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 1197,
    "path": "../public/_nuxt/Cb9X-eNS.js"
  },
  "/_nuxt/CCIXS2S6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13aa-cE4EfHSNMCOl/8YsTUPL5xXcTwM\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 5034,
    "path": "../public/_nuxt/CCIXS2S6.js"
  },
  "/_nuxt/CdKmX-0p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"57dc-MpM/LkYDg4bFl7ZQURP5HhgMTmI\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 22492,
    "path": "../public/_nuxt/CdKmX-0p.js"
  },
  "/_nuxt/Ce0JK6t_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b5-SrN8oqFD2ffIthVznq5LrmYGHpA\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 2229,
    "path": "../public/_nuxt/Ce0JK6t_.js"
  },
  "/_nuxt/Ce0T19Qg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39f-PjTEUud72ziP9lDSR2sh/bj5P0U\"",
    "mtime": "2025-07-02T03:32:57.214Z",
    "size": 927,
    "path": "../public/_nuxt/Ce0T19Qg.js"
  },
  "/_nuxt/CeLU5_4g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19f-t9BKZF26IP3KPnKxXHWh4vHjskw\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 415,
    "path": "../public/_nuxt/CeLU5_4g.js"
  },
  "/_nuxt/Ceo6PQm8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a5e-cq4F5ItNVRih1Z5Clm1JnmMJbJE\"",
    "mtime": "2025-07-02T03:32:57.030Z",
    "size": 2654,
    "path": "../public/_nuxt/Ceo6PQm8.js"
  },
  "/_nuxt/CfdTYgcp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"368-S78cZ44xvMxsSwg93zwkEt61Iy8\"",
    "mtime": "2025-07-02T03:32:57.214Z",
    "size": 872,
    "path": "../public/_nuxt/CfdTYgcp.js"
  },
  "/_nuxt/CfE4BKUc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cc-smOvheDfRrmpdLlIZ0a4jE+WiWs\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 972,
    "path": "../public/_nuxt/CfE4BKUc.js"
  },
  "/_nuxt/CfY7axZw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e367-xCnlpKJIXkptN49zCDOuiwZc1so\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 58215,
    "path": "../public/_nuxt/CfY7axZw.js"
  },
  "/_nuxt/CFZP5Cvd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"344-8vOPUSUV5/qzScCep95QZYiv65I\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 836,
    "path": "../public/_nuxt/CFZP5Cvd.js"
  },
  "/_nuxt/ChartJS.msMTTZi4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-7mUhpSSxoyp428B3gOjzWzuBfEg\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 62,
    "path": "../public/_nuxt/ChartJS.msMTTZi4.css"
  },
  "/_nuxt/Chat.By1jjSvu.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"117c-YWQhcNeXBIDMoJx1Fjols2hX6hI\"",
    "mtime": "2025-07-02T03:32:56.988Z",
    "size": 4476,
    "path": "../public/_nuxt/Chat.By1jjSvu.css"
  },
  "/_nuxt/CHc_jQfl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5de-i/v4RHLPoBqH5KNGLYOkF6ktzfU\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 1502,
    "path": "../public/_nuxt/CHc_jQfl.js"
  },
  "/_nuxt/ChDSbof_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"622-WNiwSRJPg3vCV2hWvqYSiP2KFGQ\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 1570,
    "path": "../public/_nuxt/ChDSbof_.js"
  },
  "/_nuxt/ChgbZDn-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d00-U8Hy+20rHtXXvjYdHq6Ac9Eg+pI\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 23808,
    "path": "../public/_nuxt/ChgbZDn-.js"
  },
  "/_nuxt/ChiuVQgY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1beb-PTFxEtOP3pTzFhSV/doGz4T++Xc\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 7147,
    "path": "../public/_nuxt/ChiuVQgY.js"
  },
  "/_nuxt/CibKJjgz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36a-Uu56dBDdSzJbvw3pGNaxpjOxq7A\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 874,
    "path": "../public/_nuxt/CibKJjgz.js"
  },
  "/_nuxt/CIDXEuKI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8ff-Hwxa7nMjvc9lf7fDQr4+goKIIIU\"",
    "mtime": "2025-07-02T03:32:57.150Z",
    "size": 2303,
    "path": "../public/_nuxt/CIDXEuKI.js"
  },
  "/_nuxt/CIkngJdD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cc7-gjSKSAeDMjnxIiOQkYY87FqZQus\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 3271,
    "path": "../public/_nuxt/CIkngJdD.js"
  },
  "/_nuxt/CizOCmLK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b1-URXUK0qb1SEDnWKKV31KGKShVyI\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 1713,
    "path": "../public/_nuxt/CizOCmLK.js"
  },
  "/_nuxt/Cj8BEiPu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c8c-nHJ4LSyYQifO/q/Uyi9CebH4DEA\"",
    "mtime": "2025-07-02T03:32:57.255Z",
    "size": 3212,
    "path": "../public/_nuxt/Cj8BEiPu.js"
  },
  "/_nuxt/CJbG4D_o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"68-fxCTY7zFt8QsMwWjpK3gge69zf8\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 104,
    "path": "../public/_nuxt/CJbG4D_o.js"
  },
  "/_nuxt/CJi9h98v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"71a-Ry+zYRYl59wkaotKGX3rGQyM2Zg\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 1818,
    "path": "../public/_nuxt/CJi9h98v.js"
  },
  "/_nuxt/CkQwOZEu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"440-fDWFIQLmbEtNn5K08epQDuN+f4U\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 1088,
    "path": "../public/_nuxt/CkQwOZEu.js"
  },
  "/_nuxt/CKrV5hs_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ce7-Y1VXNkNTckuD8WA+OVJOilgOL7E\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 7399,
    "path": "../public/_nuxt/CKrV5hs_.js"
  },
  "/_nuxt/ClBkVzUJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"83c50-sgmFoeXEKGy6itlI6cLhF4Db5Dc\"",
    "mtime": "2025-07-02T03:32:57.211Z",
    "size": 539728,
    "path": "../public/_nuxt/ClBkVzUJ.js"
  },
  "/_nuxt/ClCBv-Io.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6ae-Pb6liTrGzgL4s+GLAk1AVi//i/w\"",
    "mtime": "2025-07-02T03:32:57.211Z",
    "size": 1710,
    "path": "../public/_nuxt/ClCBv-Io.js"
  },
  "/_nuxt/CLILBBDo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a35-3jA0Ey8JxkNsvwycwvo/IFFGcu8\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 2613,
    "path": "../public/_nuxt/CLILBBDo.js"
  },
  "/_nuxt/ClqUX01x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b32-XAN1WP+MwqzLmHJiGb9cVq4rKuw\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 2866,
    "path": "../public/_nuxt/ClqUX01x.js"
  },
  "/_nuxt/CMayOPFO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"135b-tT7kNyaTQ7AjRqCE+3MsQJ0rKrU\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 4955,
    "path": "../public/_nuxt/CMayOPFO.js"
  },
  "/_nuxt/CnGe1ZYO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"79b-tXCIAd2AGSKKvfQGxW/WyTG2yCI\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 1947,
    "path": "../public/_nuxt/CnGe1ZYO.js"
  },
  "/_nuxt/COp8PWbT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ff-heZ8co4hrIthKQtq059389OJoHM\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 767,
    "path": "../public/_nuxt/COp8PWbT.js"
  },
  "/_nuxt/CoZXizUA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"51c5-/0Bmx91I1uBZq+Ogy4XHCQPRzgo\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 20933,
    "path": "../public/_nuxt/CoZXizUA.js"
  },
  "/_nuxt/Cp1EcTae.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"374-IY+5Mi46J2KArVaG3/W+QvBBAZs\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 884,
    "path": "../public/_nuxt/Cp1EcTae.js"
  },
  "/_nuxt/CPaP9XWZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25b9-GwnjMMM9X7d9y3dfoMNFHSofN/o\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 9657,
    "path": "../public/_nuxt/CPaP9XWZ.js"
  },
  "/_nuxt/CpOn1Zo2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12a4-CVbt81m3NqND3gf+fm9+hDbD5/g\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 4772,
    "path": "../public/_nuxt/CpOn1Zo2.js"
  },
  "/_nuxt/CQ1P5iQd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"663-fJuIU13oh945pH5hbyApiCYCgTE\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 1635,
    "path": "../public/_nuxt/CQ1P5iQd.js"
  },
  "/_nuxt/Cq9ofVSD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0a-jlZep/kW3pppRX2Zo3JeCHF7gQg\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 3338,
    "path": "../public/_nuxt/Cq9ofVSD.js"
  },
  "/_nuxt/CqAB6SjY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b6-pxhRSDMGNcc4x44W7QI3kBfW2Rw\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 694,
    "path": "../public/_nuxt/CqAB6SjY.js"
  },
  "/_nuxt/CQnqEdct.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a0-X26fC2XBcsLDB8Nj+8Aqz84QK6Y\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 672,
    "path": "../public/_nuxt/CQnqEdct.js"
  },
  "/_nuxt/CquQA5xx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"301-zVa/uTQ4Y9e5TmOryHT2bg+SvOQ\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 769,
    "path": "../public/_nuxt/CquQA5xx.js"
  },
  "/_nuxt/CqzeJJZP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"983-6WQJLyqTiShnqMxHThQRFgzIQ5o\"",
    "mtime": "2025-07-02T03:32:57.152Z",
    "size": 2435,
    "path": "../public/_nuxt/CqzeJJZP.js"
  },
  "/_nuxt/CR5cmBc7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9d6-dGzTwo5brTFIRDpouLbQGhwklVk\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 2518,
    "path": "../public/_nuxt/CR5cmBc7.js"
  },
  "/_nuxt/CRsi9EUu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f91-/MQSf6SO9Gk75+W8RgRcgmv6z38\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 3985,
    "path": "../public/_nuxt/CRsi9EUu.js"
  },
  "/_nuxt/CS80t-Rq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e3-96ai6yTnt+XY25nuqkQzGdX+C+A\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 739,
    "path": "../public/_nuxt/CS80t-Rq.js"
  },
  "/_nuxt/CSKdESWr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"265d9-HHjRQ7PT53u/GBsc5DH5pAsEbHA\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 157145,
    "path": "../public/_nuxt/CSKdESWr.js"
  },
  "/_nuxt/Ctcjf-3E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"306-3dxSpey8qyhUjuF3d4mSxW/1qKk\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 774,
    "path": "../public/_nuxt/Ctcjf-3E.js"
  },
  "/_nuxt/CTpJlj0A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cf-3UxOIgfKSuRkprZOaBqc0cRbEms\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 719,
    "path": "../public/_nuxt/CTpJlj0A.js"
  },
  "/_nuxt/Cu8hNWmM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"222-el4firS6K9cTF88IKx3ZyUdXM6M\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 546,
    "path": "../public/_nuxt/Cu8hNWmM.js"
  },
  "/_nuxt/CujU75Im.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"345-MVKZDzKCMpfK1x2j+pqf4le5zw8\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 837,
    "path": "../public/_nuxt/CujU75Im.js"
  },
  "/_nuxt/CvCg8W-e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19e2-aqqVglqrLeWH1RvkDDKubrhVXEQ\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 6626,
    "path": "../public/_nuxt/CvCg8W-e.js"
  },
  "/_nuxt/CWrgfUif.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"57a-6PekMfM1Se7irJGm4/658bu3DIQ\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 1402,
    "path": "../public/_nuxt/CWrgfUif.js"
  },
  "/_nuxt/Cx9GD3Vn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9a1-mqsRSGAhA3tq79YqRPFqdzMMm+8\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 2465,
    "path": "../public/_nuxt/Cx9GD3Vn.js"
  },
  "/_nuxt/CxJvYK31.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b20c8-TwAMUlqpbPa9I8coO3WZ/Bp8T6o\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 1777864,
    "path": "../public/_nuxt/CxJvYK31.js"
  },
  "/_nuxt/CXka4_Or.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"105c2-1WG3AXNxyDn67YiXAveYnlOF0Po\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 67010,
    "path": "../public/_nuxt/CXka4_Or.js"
  },
  "/_nuxt/CxlFK3Et.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c13-JoE/EyYGh4x6EWXeopJYfaZ2ln8\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 3091,
    "path": "../public/_nuxt/CxlFK3Et.js"
  },
  "/_nuxt/CxN_fpha.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"180-GIv7pb5ZAiVljhj53+3tKWc6KDc\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 384,
    "path": "../public/_nuxt/CxN_fpha.js"
  },
  "/_nuxt/CXWPuV0d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c46-L6GcMj71nhe1TqbiFZeKKu9dCrQ\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 3142,
    "path": "../public/_nuxt/CXWPuV0d.js"
  },
  "/_nuxt/CYXyEcsu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f9-b0FMLxDuvxGjJLB/KeYRhOJgWM0\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 249,
    "path": "../public/_nuxt/CYXyEcsu.js"
  },
  "/_nuxt/Cz58hpHx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f3-gufLDVbu8QOmydK/qvxD3fr4Z9I\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 755,
    "path": "../public/_nuxt/Cz58hpHx.js"
  },
  "/_nuxt/CZ9CvP0z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"893-WKY9OtLuxsX7Q/DxmDKakCfxV4I\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 2195,
    "path": "../public/_nuxt/CZ9CvP0z.js"
  },
  "/_nuxt/CzHAK-XV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f1-6dDBOGunc7hpwKqFrXnrz0TRUK4\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 753,
    "path": "../public/_nuxt/CzHAK-XV.js"
  },
  "/_nuxt/CzK2tKPR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2623-g5jvV6zTSgHhEUgGOreReMRRxDA\"",
    "mtime": "2025-07-02T03:32:57.152Z",
    "size": 9763,
    "path": "../public/_nuxt/CzK2tKPR.js"
  },
  "/_nuxt/D-0NEZgf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18d6-yn0alrgSagJzwIjk7pqG1PcmKmo\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 6358,
    "path": "../public/_nuxt/D-0NEZgf.js"
  },
  "/_nuxt/D0hXcREo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cdf8-R/Mu/GgOw+JyKJKqTXiiSH4/lVU\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 52728,
    "path": "../public/_nuxt/D0hXcREo.js"
  },
  "/_nuxt/D0p_k7TL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a70-IiAbIVYbAVoo6YT5INVHmM/prdY\"",
    "mtime": "2025-07-02T03:32:57.164Z",
    "size": 10864,
    "path": "../public/_nuxt/D0p_k7TL.js"
  },
  "/_nuxt/D0xIFIK6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8aa-gy5m262hM1TYpzm4DCCwcGev0o0\"",
    "mtime": "2025-07-02T03:32:57.211Z",
    "size": 2218,
    "path": "../public/_nuxt/D0xIFIK6.js"
  },
  "/_nuxt/D1ufR1dd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ab2-3kbsjAWLW5iNfI6+mkwn4Td+7j8\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 10930,
    "path": "../public/_nuxt/D1ufR1dd.js"
  },
  "/_nuxt/D1xA23oW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"330-p8yyEX6t7NUL8aB3PYAk+E3ix7s\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 816,
    "path": "../public/_nuxt/D1xA23oW.js"
  },
  "/_nuxt/D3EcEUrU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7ba-0NCw/1fO2u8qRjeO7lGaYVL24HU\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 1978,
    "path": "../public/_nuxt/D3EcEUrU.js"
  },
  "/_nuxt/D47kniez.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ef3-jpNpGPa2jKYn530emaeNRrqkvP8\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 16115,
    "path": "../public/_nuxt/D47kniez.js"
  },
  "/_nuxt/D4k_ikNW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0f-9taCJZEDvhselFvjnU+0TJnTs3w\"",
    "mtime": "2025-07-02T03:32:57.257Z",
    "size": 3343,
    "path": "../public/_nuxt/D4k_ikNW.js"
  },
  "/_nuxt/D5InBg5e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"82a-JW/llofmqGXE9GcrqIEn6UvqWsw\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 2090,
    "path": "../public/_nuxt/D5InBg5e.js"
  },
  "/_nuxt/D6pL26k_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c2-WREt/LF1UuGdttXNJ5SXXKWsfZ0\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 706,
    "path": "../public/_nuxt/D6pL26k_.js"
  },
  "/_nuxt/D6WRW24T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11a0-LbavzWAU4sPjgkod9V5vR7th4iE\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 4512,
    "path": "../public/_nuxt/D6WRW24T.js"
  },
  "/_nuxt/D7CZkleD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1334-lxnFdxOqWCSnmhqOZa8Fu0Gmcq8\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 4916,
    "path": "../public/_nuxt/D7CZkleD.js"
  },
  "/_nuxt/D8BSCbPd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"193c2-YjSyG9EzAgMMw24ZI//bimKP3Jc\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 103362,
    "path": "../public/_nuxt/D8BSCbPd.js"
  },
  "/_nuxt/D8ojES2d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"306-3dxSpey8qyhUjuF3d4mSxW/1qKk\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 774,
    "path": "../public/_nuxt/D8ojES2d.js"
  },
  "/_nuxt/D9kWJvrV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"83b-CiH+nsmUNpSc6sIxktN63y806nQ\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 2107,
    "path": "../public/_nuxt/D9kWJvrV.js"
  },
  "/_nuxt/DA81Umi_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"70-JWEYayjQkVA38mxsnq5Bt1TMs/g\"",
    "mtime": "2025-07-02T03:32:57.070Z",
    "size": 112,
    "path": "../public/_nuxt/DA81Umi_.js"
  },
  "/_nuxt/DAsOZhKZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4155-EWEWCvKWiZvPhCxXoQbkyvqVp4o\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 16725,
    "path": "../public/_nuxt/DAsOZhKZ.js"
  },
  "/_nuxt/DataTable.CpsT5zLI.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-MdhsKTPx8JKB3hl6QvkVjcCTffs\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 62,
    "path": "../public/_nuxt/DataTable.CpsT5zLI.css"
  },
  "/_nuxt/DataTable.Dg5KAn-s.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1cf-ATPzDZRQ/NSuCa1dMtT5XWA5mf0\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 463,
    "path": "../public/_nuxt/DataTable.Dg5KAn-s.css"
  },
  "/_nuxt/Daxt6Ggu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b1e-4WVRkAhu6P8FJKTSvP8H9XNYsso\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 2846,
    "path": "../public/_nuxt/Daxt6Ggu.js"
  },
  "/_nuxt/Db4IxQRh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"797-O6IV5zYqhXa0SnLLRCu/qrdrqno\"",
    "mtime": "2025-07-02T03:32:57.148Z",
    "size": 1943,
    "path": "../public/_nuxt/Db4IxQRh.js"
  },
  "/_nuxt/DBVbS0LC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45e-YxFgjg91pMPd9y0ekA/629X1Rtw\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 1118,
    "path": "../public/_nuxt/DBVbS0LC.js"
  },
  "/_nuxt/DBwQnpd4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c2e-HaYRM+SbrvASitURQdHCTnvKtCU\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 15406,
    "path": "../public/_nuxt/DBwQnpd4.js"
  },
  "/_nuxt/DB_seVUB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"efe-Kv3Ew8pISml7lSWuZ70U/GHbMWg\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 3838,
    "path": "../public/_nuxt/DB_seVUB.js"
  },
  "/_nuxt/Dc1ZoGIe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"627-T+liFlej8zy7ex87x0v4H/YG3ys\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 1575,
    "path": "../public/_nuxt/Dc1ZoGIe.js"
  },
  "/_nuxt/Dc4Fqdqj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"99da-T6fvUvjRYX8mk3oagHiCZstq7n4\"",
    "mtime": "2025-07-02T03:32:57.257Z",
    "size": 39386,
    "path": "../public/_nuxt/Dc4Fqdqj.js"
  },
  "/_nuxt/Dd0aBf_B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"950-5XUgH8aNGGTpBgC0ZMG+yovZhZk\"",
    "mtime": "2025-07-02T03:32:57.150Z",
    "size": 2384,
    "path": "../public/_nuxt/Dd0aBf_B.js"
  },
  "/_nuxt/DdgEBDYe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"44ea-MHCY9oTIyRxuIhOK/vhfs57rF4M\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 17642,
    "path": "../public/_nuxt/DdgEBDYe.js"
  },
  "/_nuxt/DDTuV2po.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e8-mVYf00fkjJY29Bs3LkrZc/Aeg8k\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 744,
    "path": "../public/_nuxt/DDTuV2po.js"
  },
  "/_nuxt/Dd_FsYD0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7829-H90MvxsSYbTuFW7bf9pANRFi+Sw\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 30761,
    "path": "../public/_nuxt/Dd_FsYD0.js"
  },
  "/_nuxt/DepnAinC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17a46-d5UHHIJbdvt8EVje3mJ2A+eEbGc\"",
    "mtime": "2025-07-02T03:32:57.030Z",
    "size": 96838,
    "path": "../public/_nuxt/DepnAinC.js"
  },
  "/_nuxt/DeqVNE21.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ec6-nErw17lIMreLNy5Za1FoBZ2tj+s\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 3782,
    "path": "../public/_nuxt/DeqVNE21.js"
  },
  "/_nuxt/DesMrym3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11dd-9VN0EPQtdVcARXoYf+KGDEPNC8A\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 4573,
    "path": "../public/_nuxt/DesMrym3.js"
  },
  "/_nuxt/DesZWNhp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"336f-YWENsmAUe6EovGU33NVo9BBZW9A\"",
    "mtime": "2025-07-02T03:32:57.096Z",
    "size": 13167,
    "path": "../public/_nuxt/DesZWNhp.js"
  },
  "/_nuxt/DFKWn1KB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a0-tfDFT8grqund3TCHhzjLlIvajJo\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 672,
    "path": "../public/_nuxt/DFKWn1KB.js"
  },
  "/_nuxt/DglD7fV2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ed-DLnrV9YNW/OnVmDZHnS6R0jA5wM\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 749,
    "path": "../public/_nuxt/DglD7fV2.js"
  },
  "/_nuxt/DgvxvxWW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"469-rvBC5iXafjoHoNwqZqsLSesrk+4\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 1129,
    "path": "../public/_nuxt/DgvxvxWW.js"
  },
  "/_nuxt/DI16sfIa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19df-TaLN3zdze1MvHeDwmwlVtQWxvT8\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 6623,
    "path": "../public/_nuxt/DI16sfIa.js"
  },
  "/_nuxt/Di2OxNGh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1886-htGAoFtBs6+PTw9INAXwaDBYTIs\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 6278,
    "path": "../public/_nuxt/Di2OxNGh.js"
  },
  "/_nuxt/DISyIQir.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b1e-mZ/KQGxB/qmLW9JSSl2OIcWOEgQ\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 2846,
    "path": "../public/_nuxt/DISyIQir.js"
  },
  "/_nuxt/DJEptz2Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cf2-n+i9OzgMZDfVjy/75cD6PMuYFCQ\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 7410,
    "path": "../public/_nuxt/DJEptz2Y.js"
  },
  "/_nuxt/DjswEDd8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f73-yJ+nc8ybilCEH3MX7lQf9NOLEiY\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 8051,
    "path": "../public/_nuxt/DjswEDd8.js"
  },
  "/_nuxt/DkfRGv-c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f1-j25GTOUOvqcz9/uqCRmkNlQtGf4\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 1009,
    "path": "../public/_nuxt/DkfRGv-c.js"
  },
  "/_nuxt/DKz-yscG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"344-so7s1nE0zq/gQYd7hMdsuwetRDM\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 836,
    "path": "../public/_nuxt/DKz-yscG.js"
  },
  "/_nuxt/Dl-dSXcL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"220d-Ve/H7bpzp1dm7IQvNJASMUfiBkg\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 8717,
    "path": "../public/_nuxt/Dl-dSXcL.js"
  },
  "/_nuxt/DMiUpVhH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d83-cfDbj8sVtQ2PVtV5iWF5smn5Sus\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 7555,
    "path": "../public/_nuxt/DMiUpVhH.js"
  },
  "/_nuxt/DmmYK0Df.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d1-LBBYWl2vH94jrLXrXVgtA+EBnkU\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 2257,
    "path": "../public/_nuxt/DmmYK0Df.js"
  },
  "/_nuxt/DmxhAHgs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"46dd-UDJRPX6byAdoArmaBpwxBlr/Jxw\"",
    "mtime": "2025-07-02T03:32:57.255Z",
    "size": 18141,
    "path": "../public/_nuxt/DmxhAHgs.js"
  },
  "/_nuxt/DobUpCZn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c6-zIA+80WTD79Qw4JLABY5hR/ll3c\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 2246,
    "path": "../public/_nuxt/DobUpCZn.js"
  },
  "/_nuxt/Dod14pz8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4761-T3uupt62Hz5B0I3DgiL1oeEMoKk\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 18273,
    "path": "../public/_nuxt/Dod14pz8.js"
  },
  "/_nuxt/DOFjoH2q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"274d-2AboXbvhlu6WZif21F+CYBBMDh0\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 10061,
    "path": "../public/_nuxt/DOFjoH2q.js"
  },
  "/_nuxt/DoncijLG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d23-wGkHIbrJJWhNdCOqe8+fe5huv5s\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 3363,
    "path": "../public/_nuxt/DoncijLG.js"
  },
  "/_nuxt/DOrPQb77.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cd5e-vydrfKAGHpsTRM75lj+8iebDYEU\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 118110,
    "path": "../public/_nuxt/DOrPQb77.js"
  },
  "/_nuxt/DPKXg6gp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30c7-VQ5oCu+g6NFhGOCP3EPYZ37bauQ\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 12487,
    "path": "../public/_nuxt/DPKXg6gp.js"
  },
  "/_nuxt/DpMt567X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f7a-xtJVo3/f1NpidhCB1fNxkFEFWjE\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 24442,
    "path": "../public/_nuxt/DpMt567X.js"
  },
  "/_nuxt/DQ25T0hU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10cb6-nXKAMjgzsMPrdTl8wDPuMU+Nf6k\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 68790,
    "path": "../public/_nuxt/DQ25T0hU.js"
  },
  "/_nuxt/Dq9iJR1S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cf8-GZcREQxUyr7RQDO0vnardCT/AAo\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 7416,
    "path": "../public/_nuxt/Dq9iJR1S.js"
  },
  "/_nuxt/DqAemSBd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d1b-BMDUZua4/RCRs3zPcQGhAaez+1A\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 36123,
    "path": "../public/_nuxt/DqAemSBd.js"
  },
  "/_nuxt/DqHu4uYt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13b0a-BOhjy581Fv74Y5L1TgpeimrsIHg\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 80650,
    "path": "../public/_nuxt/DqHu4uYt.js"
  },
  "/_nuxt/DQVn8mwl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f311-d2Em5XC1OPb2Ncj9zwPXBLh0HdI\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 193297,
    "path": "../public/_nuxt/DQVn8mwl.js"
  },
  "/_nuxt/DrzPTWTe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e2-Bu/KeuIlS4Mb4nR5QK78D9jhFLA\"",
    "mtime": "2025-07-02T03:32:57.148Z",
    "size": 482,
    "path": "../public/_nuxt/DrzPTWTe.js"
  },
  "/_nuxt/DSeycCHo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1231-9vNWl+7u0g5F6HPlLGq0olaVwmg\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 4657,
    "path": "../public/_nuxt/DSeycCHo.js"
  },
  "/_nuxt/DSnyYAdI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f67-9d72Hzmke1m6/CB+kKEGXohJW9Y\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 3943,
    "path": "../public/_nuxt/DSnyYAdI.js"
  },
  "/_nuxt/DtRU8Amr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"88d-++w/JCEnzZiNG0k8Vbsn77Zex1g\"",
    "mtime": "2025-07-02T03:32:57.148Z",
    "size": 2189,
    "path": "../public/_nuxt/DtRU8Amr.js"
  },
  "/_nuxt/DTWwQaqt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d43-gt6P99UfUFZuMnQhgPCUMIFRJ0c\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 11587,
    "path": "../public/_nuxt/DTWwQaqt.js"
  },
  "/_nuxt/DU6CIJ0p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36f-qFgYeALZmdm0hiP2vulXRvkHXyo\"",
    "mtime": "2025-07-02T03:32:57.258Z",
    "size": 879,
    "path": "../public/_nuxt/DU6CIJ0p.js"
  },
  "/_nuxt/Dua1by8t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bfb-M0vwdzfNAo+UzH9DT/oLjzj+ZUs\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 3067,
    "path": "../public/_nuxt/Dua1by8t.js"
  },
  "/_nuxt/Du_PPbPY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4d6-aZ1S4ny8PluXk3ktxI2sl5DNJxk\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 1238,
    "path": "../public/_nuxt/Du_PPbPY.js"
  },
  "/_nuxt/DWqZOwyz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"369-++xRNIT8FcERdU4l94ZJo12JuFg\"",
    "mtime": "2025-07-02T03:32:57.164Z",
    "size": 873,
    "path": "../public/_nuxt/DWqZOwyz.js"
  },
  "/_nuxt/Dx3Oz6qP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"77a-T03ygLZi9JkrlJeWYIugSQcOyGM\"",
    "mtime": "2025-07-02T03:32:57.164Z",
    "size": 1914,
    "path": "../public/_nuxt/Dx3Oz6qP.js"
  },
  "/_nuxt/DXN3pjBO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"730-QL+JZco3bNu+M+jSesx6PcZFbaE\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 1840,
    "path": "../public/_nuxt/DXN3pjBO.js"
  },
  "/_nuxt/Dx_xMED3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"feec-TCr/gwJTiD5S3LFB1tRFnAw70sg\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 65260,
    "path": "../public/_nuxt/Dx_xMED3.js"
  },
  "/_nuxt/DyGBYYLP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"175a-hSCW1dMOMhdbsRL2nBuqxBOX7f8\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 5978,
    "path": "../public/_nuxt/DyGBYYLP.js"
  },
  "/_nuxt/DyOxm0pg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10c3-m7dDD4gfLrmgGLemdcRTcZsaiLM\"",
    "mtime": "2025-07-02T03:32:57.085Z",
    "size": 4291,
    "path": "../public/_nuxt/DyOxm0pg.js"
  },
  "/_nuxt/DYTQsm-Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1959-gUDdpBSfF4vmABlp/Vw5DzHT/Y8\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 6489,
    "path": "../public/_nuxt/DYTQsm-Q.js"
  },
  "/_nuxt/Dz07gBgt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31e-L5vyxgHM0+xVjBWfHFOS9USamvY\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 798,
    "path": "../public/_nuxt/Dz07gBgt.js"
  },
  "/_nuxt/DZhAxiTS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3384-P0JEZLZQ0zEGXVnvAyBJHZ2w2JA\"",
    "mtime": "2025-07-02T03:32:57.257Z",
    "size": 13188,
    "path": "../public/_nuxt/DZhAxiTS.js"
  },
  "/_nuxt/DZRQBgRS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"28a-f5W8hS1XJMZkk1awe991CwvdmrQ\"",
    "mtime": "2025-07-02T03:32:57.195Z",
    "size": 650,
    "path": "../public/_nuxt/DZRQBgRS.js"
  },
  "/_nuxt/DzVXGxFZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"217-NTQ5mEMZKy6T+438pQSgJex7r4I\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 535,
    "path": "../public/_nuxt/DzVXGxFZ.js"
  },
  "/_nuxt/D_4ZyLTN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ef-BTXwdBMFLCm7GDVS2nuwfoA2ySQ\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 751,
    "path": "../public/_nuxt/D_4ZyLTN.js"
  },
  "/_nuxt/D__n0o_4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30d47-FaUQIZ/NFeXQGAOluKFMH4R5/Tg\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 200007,
    "path": "../public/_nuxt/D__n0o_4.js"
  },
  "/_nuxt/Ecommerce.BCazoSpk.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"896-AkuyqsmjlEKwJxhrD8ahJAC2HZk\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 2198,
    "path": "../public/_nuxt/Ecommerce.BCazoSpk.css"
  },
  "/_nuxt/eCommerce.Dg7gAttf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f4-1bRcgr8Bxe14m95TLZYUE61BnPQ\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 1268,
    "path": "../public/_nuxt/eCommerce.Dg7gAttf.css"
  },
  "/_nuxt/ef5bxYFj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30a-5KvIJ2ji+Dn6r6Lui1Y6EUBDBio\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 778,
    "path": "../public/_nuxt/ef5bxYFj.js"
  },
  "/_nuxt/entry.DWgZC-NZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b700-SDV4fgLXpvuNSKNFDQQ/PbEGX5k\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 46848,
    "path": "../public/_nuxt/entry.DWgZC-NZ.css"
  },
  "/_nuxt/Extra.BZlYJeFb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f0-sW77DWK1zGByMACQvOVI9buNWnM\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 2032,
    "path": "../public/_nuxt/Extra.BZlYJeFb.css"
  },
  "/_nuxt/ForgotPassword.Btv3c3IZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43e-6xJsA9Wfx2ADpEvIgR+n4pHdMmE\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 1086,
    "path": "../public/_nuxt/ForgotPassword.Btv3c3IZ.css"
  },
  "/_nuxt/fpT5ylEL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e4b-RZDnAN85lCXShDQDhN8MwatN/hU\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 3659,
    "path": "../public/_nuxt/fpT5ylEL.js"
  },
  "/_nuxt/FullCalendar.BJLYgOHa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"22b2-YaCmqPzlrr3QgRWhllNrDvPvG+o\"",
    "mtime": "2025-07-02T03:32:57.030Z",
    "size": 8882,
    "path": "../public/_nuxt/FullCalendar.BJLYgOHa.css"
  },
  "/_nuxt/FullWidth.BWwCx5LX.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"145-KUnzMtOulMOCButqUzsmVG6hT74\"",
    "mtime": "2025-07-02T03:32:57.016Z",
    "size": 325,
    "path": "../public/_nuxt/FullWidth.BWwCx5LX.css"
  },
  "/_nuxt/GcW250LR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"81c-E8CX44xzoKuOpIBFy+hriAck0mg\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 2076,
    "path": "../public/_nuxt/GcW250LR.js"
  },
  "/_nuxt/Gg5ARHWX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"206e-0PI2irXUBFgJva5VqBeypcQtj9c\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 8302,
    "path": "../public/_nuxt/Gg5ARHWX.js"
  },
  "/_nuxt/Grid.B3j6Yq7Y.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-T2UCHeVMUWSOUwWU7mnMCOki/4c\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 135,
    "path": "../public/_nuxt/Grid.B3j6Yq7Y.css"
  },
  "/_nuxt/Grid.JQVmbxIy.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"429-SVyMG0G8xENHjSmCe5RCJ4DfZyA\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 1065,
    "path": "../public/_nuxt/Grid.JQVmbxIy.css"
  },
  "/_nuxt/GZ_lbagQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e02-FvbCPH5CJJS1fh+xSBkkWVJ4IPQ\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 3586,
    "path": "../public/_nuxt/GZ_lbagQ.js"
  },
  "/_nuxt/HdBnhJze.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2478b-MkvYPezfqtU0uYq7dPLhXLHxh7Y\"",
    "mtime": "2025-07-02T03:32:57.258Z",
    "size": 149387,
    "path": "../public/_nuxt/HdBnhJze.js"
  },
  "/_nuxt/hDzo1BcG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"299a8-lRwzY30RQ8lyYBPLYcweYkT7rwo\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 170408,
    "path": "../public/_nuxt/hDzo1BcG.js"
  },
  "/_nuxt/hL1mNVBv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d99-0wvqEwpviOJIYQPbv4gfGxgim4I\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 7577,
    "path": "../public/_nuxt/hL1mNVBv.js"
  },
  "/_nuxt/HS-i9Zhe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31bd-WBfVJeuTcWz2SiqLPhDkXfhfLwM\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 12733,
    "path": "../public/_nuxt/HS-i9Zhe.js"
  },
  "/_nuxt/hVEDjhk5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a90-cBKUUd/C5LszJRAWpK3lp9OkUJ0\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 2704,
    "path": "../public/_nuxt/hVEDjhk5.js"
  },
  "/_nuxt/Icons.BppdhUvL.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"239-an3rsLSS8jyuV/f+uAvdmfjWimQ\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 569,
    "path": "../public/_nuxt/Icons.BppdhUvL.css"
  },
  "/_nuxt/IRfJZSG6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"af-abQ7CqH3Te80JRhgbJTLvqZtCKQ\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 175,
    "path": "../public/_nuxt/IRfJZSG6.js"
  },
  "/_nuxt/iWyup8_3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"418-QvBX+4o6fGRl/X81ctreUJpRaTc\"",
    "mtime": "2025-07-02T03:32:57.216Z",
    "size": 1048,
    "path": "../public/_nuxt/iWyup8_3.js"
  },
  "/_nuxt/jetbrains-mono-latin-100-normal.BDsKzJJa.woff": {
    "type": "font/woff",
    "etag": "\"6d48-H+uzKnQKu5qnMkfypzBVdtyqCW8\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 27976,
    "path": "../public/_nuxt/jetbrains-mono-latin-100-normal.BDsKzJJa.woff"
  },
  "/_nuxt/jetbrains-mono-latin-100-normal.DlYB2XW3.woff2": {
    "type": "font/woff2",
    "etag": "\"531c-UynuSp2gpIHwmIM1t7f4mXAKuGA\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 21276,
    "path": "../public/_nuxt/jetbrains-mono-latin-100-normal.DlYB2XW3.woff2"
  },
  "/_nuxt/jetbrains-mono-latin-200-normal.DAkpSWXi.woff": {
    "type": "font/woff",
    "etag": "\"6f70-mDLZXFHIzE9opzyelu+sxGFZLZI\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 28528,
    "path": "../public/_nuxt/jetbrains-mono-latin-200-normal.DAkpSWXi.woff"
  },
  "/_nuxt/jetbrains-mono-latin-200-normal.DvzYDkvL.woff2": {
    "type": "font/woff2",
    "etag": "\"5580-G9tCnmgDIlyXuYgoR6ig4hW7OeA\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 21888,
    "path": "../public/_nuxt/jetbrains-mono-latin-200-normal.DvzYDkvL.woff2"
  },
  "/_nuxt/jetbrains-mono-latin-300-normal.CZo8J2xo.woff2": {
    "type": "font/woff2",
    "etag": "\"55c4-HEPbStGTR8Bk4qdZIhsAfry3Nd4\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 21956,
    "path": "../public/_nuxt/jetbrains-mono-latin-300-normal.CZo8J2xo.woff2"
  },
  "/_nuxt/jetbrains-mono-latin-300-normal.xUlztO4D.woff": {
    "type": "font/woff",
    "etag": "\"6fd0-DpverWecAGqxyg3ajTuaAqP1b7s\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 28624,
    "path": "../public/_nuxt/jetbrains-mono-latin-300-normal.xUlztO4D.woff"
  },
  "/_nuxt/jetbrains-mono-latin-400-normal.B11XCQ5g.woff": {
    "type": "font/woff",
    "etag": "\"6cc8-cJiZbvMgS0+8ICQfJ4R5D43O47U\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 27848,
    "path": "../public/_nuxt/jetbrains-mono-latin-400-normal.B11XCQ5g.woff"
  },
  "/_nuxt/jetbrains-mono-latin-400-normal.V6pRDFza.woff2": {
    "type": "font/woff2",
    "etag": "\"52b0-OuYhUYIQ5ljyzsko4MOu3m0M7+I\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 21168,
    "path": "../public/_nuxt/jetbrains-mono-latin-400-normal.V6pRDFza.woff2"
  },
  "/_nuxt/jetbrains-mono-latin-500-normal.BWZEU5yA.woff2": {
    "type": "font/woff2",
    "etag": "\"5548-NcKnK3WfWhmDT/Dd1/lKnL5VeGA\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 21832,
    "path": "../public/_nuxt/jetbrains-mono-latin-500-normal.BWZEU5yA.woff2"
  },
  "/_nuxt/jetbrains-mono-latin-500-normal.DNWG5JNy.woff": {
    "type": "font/woff",
    "etag": "\"6f90-+xBE+HYiADpLb0hvA6WiuqQ6pMw\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 28560,
    "path": "../public/_nuxt/jetbrains-mono-latin-500-normal.DNWG5JNy.woff"
  },
  "/_nuxt/jetbrains-mono-latin-600-normal.C8RAYTDA.woff2": {
    "type": "font/woff2",
    "etag": "\"5564-CBo3fWrr/gd1JNhcvMmg9aC8X00\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 21860,
    "path": "../public/_nuxt/jetbrains-mono-latin-600-normal.C8RAYTDA.woff2"
  },
  "/_nuxt/jetbrains-mono-latin-600-normal.DXv3JcnD.woff": {
    "type": "font/woff",
    "etag": "\"6f74-1L5hE1C7uuMRxHbU8FTFixoYInA\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 28532,
    "path": "../public/_nuxt/jetbrains-mono-latin-600-normal.DXv3JcnD.woff"
  },
  "/_nuxt/jetbrains-mono-latin-700-normal.BYuf6tUa.woff2": {
    "type": "font/woff2",
    "etag": "\"5594-5n+P79LwTQ/OmWmR/2dryd0I4NA\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 21908,
    "path": "../public/_nuxt/jetbrains-mono-latin-700-normal.BYuf6tUa.woff2"
  },
  "/_nuxt/jetbrains-mono-latin-700-normal.TgaEE9cx.woff": {
    "type": "font/woff",
    "etag": "\"6f94-lW7H9e2LI3Z21n874u2qfSqxgjE\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 28564,
    "path": "../public/_nuxt/jetbrains-mono-latin-700-normal.TgaEE9cx.woff"
  },
  "/_nuxt/jetbrains-mono-latin-800-normal.B9iKHRox.woff": {
    "type": "font/woff",
    "etag": "\"6c60-EKjbiJmxmGqJ5Br416B+fjlD7tw\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 27744,
    "path": "../public/_nuxt/jetbrains-mono-latin-800-normal.B9iKHRox.woff"
  },
  "/_nuxt/jetbrains-mono-latin-800-normal.D2mQHRMK.woff2": {
    "type": "font/woff2",
    "etag": "\"52f4-paRRf8vxhcadUg4RXlgCQ1CFQag\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 21236,
    "path": "../public/_nuxt/jetbrains-mono-latin-800-normal.D2mQHRMK.woff2"
  },
  "/_nuxt/JGd0ivB5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"47be-+Plx/tJwBEvXrYWV0ATO+jHrc9c\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 18366,
    "path": "../public/_nuxt/JGd0ivB5.js"
  },
  "/_nuxt/jjNeJM5X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"312-0bqxNZRVPbE2bn1ojwHGiAs8lfI\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 786,
    "path": "../public/_nuxt/jjNeJM5X.js"
  },
  "/_nuxt/JkAdgoaa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1101-cKd+WcDTsBdoY6D9XIcLftjlAyI\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 4353,
    "path": "../public/_nuxt/JkAdgoaa.js"
  },
  "/_nuxt/jKtWeZdJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"520-L0L+2kw1hoacgUYs+IPkfSD9f9c\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 1312,
    "path": "../public/_nuxt/jKtWeZdJ.js"
  },
  "/_nuxt/jV4_jsbP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a5e-jGVS/WDOTUQK5JQoqLnTdNQfh34\"",
    "mtime": "2025-07-02T03:32:57.072Z",
    "size": 2654,
    "path": "../public/_nuxt/jV4_jsbP.js"
  },
  "/_nuxt/jvm-override.DE5hmUC8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9b-kPWoGlBbmLg9c3gWkTAWJlaiPw8\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 155,
    "path": "../public/_nuxt/jvm-override.DE5hmUC8.css"
  },
  "/_nuxt/K9Fk8xhK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"347-2jY5mxggWNxVaRK7d5MKUed1Lmw\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 839,
    "path": "../public/_nuxt/K9Fk8xhK.js"
  },
  "/_nuxt/k9NlCA2M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"138-tkcJI7QZLi8pkcswNw9QLpZcoUc\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 312,
    "path": "../public/_nuxt/k9NlCA2M.js"
  },
  "/_nuxt/Kanban.CE6DlGv-.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"967-jSe2K/3754pyb/9KDnQufLU63AM\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 2407,
    "path": "../public/_nuxt/Kanban.CE6DlGv-.css"
  },
  "/_nuxt/kd5HZ3BB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d8a-cq8WObMbTemLEj/zEhbZe8I+BaY\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 11658,
    "path": "../public/_nuxt/kd5HZ3BB.js"
  },
  "/_nuxt/KHKsQ5o5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b73-y2NWfogJygYGUPOICyPh1JqKeO4\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 2931,
    "path": "../public/_nuxt/KHKsQ5o5.js"
  },
  "/_nuxt/KpHkm36M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11e7-uuIxOScl3Fa5STBJ2QC9qde5sUE\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 4583,
    "path": "../public/_nuxt/KpHkm36M.js"
  },
  "/_nuxt/kUFrsyeO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5126-Xq3FpVDMgIN4n2MGPjaCsGLDXyM\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 20774,
    "path": "../public/_nuxt/kUFrsyeO.js"
  },
  "/_nuxt/lBy822mQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d9f-zu+xyUVUf/TVgqm+DffstyVla/4\"",
    "mtime": "2025-07-02T03:32:57.132Z",
    "size": 23967,
    "path": "../public/_nuxt/lBy822mQ.js"
  },
  "/_nuxt/Leaflet.DfJ392bj.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e5-VJhFJNKgPmnMDWHMu2cI2pBRcjQ\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 229,
    "path": "../public/_nuxt/Leaflet.DfJ392bj.css"
  },
  "/_nuxt/LeftSidebar.O4EcSPoq.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"115-h4xEV+6m03gUnDl8YZ12umF+cNM\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 277,
    "path": "../public/_nuxt/LeftSidebar.O4EcSPoq.css"
  },
  "/_nuxt/LegacyGrid.DBM0bcqi.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87-Cmuu0iTmb90hxudRN4lJKofbKOo\"",
    "mtime": "2025-07-02T03:32:57.030Z",
    "size": 135,
    "path": "../public/_nuxt/LegacyGrid.DBM0bcqi.css"
  },
  "/_nuxt/lexend-latin-100-normal.6TrN9uCZ.woff": {
    "type": "font/woff",
    "etag": "\"478c-ckswMbUCHT+jgZjDBTvxIPvP1EM\"",
    "mtime": "2025-07-02T03:32:56.959Z",
    "size": 18316,
    "path": "../public/_nuxt/lexend-latin-100-normal.6TrN9uCZ.woff"
  },
  "/_nuxt/lexend-latin-100-normal.BzIe-Y2J.woff2": {
    "type": "font/woff2",
    "etag": "\"37ac-I/sdrSrStscudzP9ghXCNCux/Mw\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14252,
    "path": "../public/_nuxt/lexend-latin-100-normal.BzIe-Y2J.woff2"
  },
  "/_nuxt/lexend-latin-200-normal.CD61j_6o.woff": {
    "type": "font/woff",
    "etag": "\"480c-TDn/0xAqSdf5JLd+AduEe0yNGn8\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 18444,
    "path": "../public/_nuxt/lexend-latin-200-normal.CD61j_6o.woff"
  },
  "/_nuxt/lexend-latin-200-normal.Dsf3ajP6.woff2": {
    "type": "font/woff2",
    "etag": "\"37fc-Q0d26TkEdSTPvgPt3cT1WguqNkc\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14332,
    "path": "../public/_nuxt/lexend-latin-200-normal.Dsf3ajP6.woff2"
  },
  "/_nuxt/lexend-latin-300-normal.DXMdfpJm.woff2": {
    "type": "font/woff2",
    "etag": "\"3988-hHFJC2LvecqlMuXIB/4lrVP3g0Y\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14728,
    "path": "../public/_nuxt/lexend-latin-300-normal.DXMdfpJm.woff2"
  },
  "/_nuxt/lexend-latin-300-normal.OvFe2LYY.woff": {
    "type": "font/woff",
    "etag": "\"4950-sS8HbFB8gi9LNL0SUa9uraZLsNw\"",
    "mtime": "2025-07-02T03:32:56.959Z",
    "size": 18768,
    "path": "../public/_nuxt/lexend-latin-300-normal.OvFe2LYY.woff"
  },
  "/_nuxt/lexend-latin-400-normal.CPgf14r2.woff": {
    "type": "font/woff",
    "etag": "\"482c-lgf65W9iJtC4zaxrR5Pdokf2jYM\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 18476,
    "path": "../public/_nuxt/lexend-latin-400-normal.CPgf14r2.woff"
  },
  "/_nuxt/lexend-latin-400-normal.LvJAK7uG.woff2": {
    "type": "font/woff2",
    "etag": "\"388c-r79TaDwKHidMZoXSykslFLM7ISY\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14476,
    "path": "../public/_nuxt/lexend-latin-400-normal.LvJAK7uG.woff2"
  },
  "/_nuxt/lexend-latin-500-normal.C8GxxD6j.woff": {
    "type": "font/woff",
    "etag": "\"49b4-ssBpkb1dEhyJSCHFgYxRxs9dH/I\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 18868,
    "path": "../public/_nuxt/lexend-latin-500-normal.C8GxxD6j.woff"
  },
  "/_nuxt/lexend-latin-500-normal.CeQoW-kB.woff2": {
    "type": "font/woff2",
    "etag": "\"3a40-VAN/rI80HFLhH3OX2T9XR52/NLY\"",
    "mtime": "2025-07-02T03:32:56.944Z",
    "size": 14912,
    "path": "../public/_nuxt/lexend-latin-500-normal.CeQoW-kB.woff2"
  },
  "/_nuxt/lexend-latin-600-normal.D8bhWLUa.woff": {
    "type": "font/woff",
    "etag": "\"497c-YoW8aVDGh8qBMIj4Wm1QJ4Hqo8w\"",
    "mtime": "2025-07-02T03:32:56.959Z",
    "size": 18812,
    "path": "../public/_nuxt/lexend-latin-600-normal.D8bhWLUa.woff"
  },
  "/_nuxt/lexend-latin-600-normal.VdgXozci.woff2": {
    "type": "font/woff2",
    "etag": "\"39d8-Ej7cOKvz+mVjE3zrosxTbJIf6Nw\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14808,
    "path": "../public/_nuxt/lexend-latin-600-normal.VdgXozci.woff2"
  },
  "/_nuxt/lexend-latin-700-normal.C7JlP3vT.woff": {
    "type": "font/woff",
    "etag": "\"4938-iNG/rsCO7vwbjMmRCqXYmunbQmg\"",
    "mtime": "2025-07-02T03:32:56.959Z",
    "size": 18744,
    "path": "../public/_nuxt/lexend-latin-700-normal.C7JlP3vT.woff"
  },
  "/_nuxt/lexend-latin-700-normal.CQPLFbBY.woff2": {
    "type": "font/woff2",
    "etag": "\"39f0-aarixcQvJcjick5nwiWVkP44tN4\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14832,
    "path": "../public/_nuxt/lexend-latin-700-normal.CQPLFbBY.woff2"
  },
  "/_nuxt/lexend-latin-800-normal.CM8h0TBB.woff": {
    "type": "font/woff",
    "etag": "\"48e4-a5Wc0M5clltzfr1F3xKl5xEOh40\"",
    "mtime": "2025-07-02T03:32:56.959Z",
    "size": 18660,
    "path": "../public/_nuxt/lexend-latin-800-normal.CM8h0TBB.woff"
  },
  "/_nuxt/lexend-latin-800-normal.qNQH-2He.woff2": {
    "type": "font/woff2",
    "etag": "\"3a34-TSxYiSkVxjxoxaP/aV+xo2hrXaY\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14900,
    "path": "../public/_nuxt/lexend-latin-800-normal.qNQH-2He.woff2"
  },
  "/_nuxt/lexend-latin-900-normal.BTuEEGXx.woff": {
    "type": "font/woff",
    "etag": "\"46d0-t68VACJO+p/NTeR5XqmmoKsrTDM\"",
    "mtime": "2025-07-02T03:32:56.959Z",
    "size": 18128,
    "path": "../public/_nuxt/lexend-latin-900-normal.BTuEEGXx.woff"
  },
  "/_nuxt/lexend-latin-900-normal.lvEdXfRP.woff2": {
    "type": "font/woff2",
    "etag": "\"3828-fHQPiE0rP4/v1z46UJ60P7miX+E\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14376,
    "path": "../public/_nuxt/lexend-latin-900-normal.lvEdXfRP.woff2"
  },
  "/_nuxt/li961cjF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35c8-L/cqyVJ/tKB9RxyeWLvJHCLHCEg\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 13768,
    "path": "../public/_nuxt/li961cjF.js"
  },
  "/_nuxt/List.D14orwEO.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f7-d+btknI5vA9IszwkKjsUwiH7Ynk\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 1271,
    "path": "../public/_nuxt/List.D14orwEO.css"
  },
  "/_nuxt/List.TtcJnbHp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"207-4VPykzh4ygm/r8Me3H7arEMDyN8\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 519,
    "path": "../public/_nuxt/List.TtcJnbHp.css"
  },
  "/_nuxt/Login.CHg67nZJ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43e-LJblsvuHKW8T2LhVLfM0dGyFjT8\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 1086,
    "path": "../public/_nuxt/Login.CHg67nZJ.css"
  },
  "/_nuxt/lTqqXaSc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2054-RbJqpn0+CUeGnktCt8ouB6vILf8\"",
    "mtime": "2025-07-02T03:32:57.117Z",
    "size": 8276,
    "path": "../public/_nuxt/lTqqXaSc.js"
  },
  "/_nuxt/LtrContext.BrReD7uJ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-ZzUlCdf6+0v833qHn/3sZqyVQyU\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 45,
    "path": "../public/_nuxt/LtrContext.BrReD7uJ.css"
  },
  "/_nuxt/LVolb102.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19a8-86xHjANTx8g52d+PhX+tA77e1tY\"",
    "mtime": "2025-07-02T03:32:57.211Z",
    "size": 6568,
    "path": "../public/_nuxt/LVolb102.js"
  },
  "/_nuxt/LwrPWbzy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e9-AeFme18FrhgRJLwxyxOguYTYicA\"",
    "mtime": "2025-07-02T03:32:57.248Z",
    "size": 745,
    "path": "../public/_nuxt/LwrPWbzy.js"
  },
  "/_nuxt/Mailbox.DGsycPtq.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13e9-9QRzPuaHAzPpxxMnGv95ZHaZK8A\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 5097,
    "path": "../public/_nuxt/Mailbox.DGsycPtq.css"
  },
  "/_nuxt/Map.9UJSYqx2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3abd-HnkrdQa6RargrZaBPlODiWeIl5U\"",
    "mtime": "2025-07-02T03:32:57.030Z",
    "size": 15037,
    "path": "../public/_nuxt/Map.9UJSYqx2.css"
  },
  "/_nuxt/Map.BBkNqME7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"112ab-yNGvg1+Di4S2tucC29mj7y/pEhs\"",
    "mtime": "2025-07-02T03:32:57.030Z",
    "size": 70315,
    "path": "../public/_nuxt/Map.BBkNqME7.css"
  },
  "/_nuxt/Menu.DygARj8D.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-tKgUbYR7Yn571kylxhU40xDE1jM\"",
    "mtime": "2025-07-02T03:32:57.016Z",
    "size": 62,
    "path": "../public/_nuxt/Menu.DygARj8D.css"
  },
  "/_nuxt/Milkdown.ItqiT1AQ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"57e-OltgsJ0ZnPBkyvjoXAedHE5cyNw\"",
    "mtime": "2025-07-02T03:32:57.016Z",
    "size": 1406,
    "path": "../public/_nuxt/Milkdown.ItqiT1AQ.css"
  },
  "/_nuxt/Mqk_jiBk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14b3-Fwd1PdfaMddaMI1w5niaB9T+rYo\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 5299,
    "path": "../public/_nuxt/Mqk_jiBk.js"
  },
  "/_nuxt/mZjm0YDT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e6-K+Zyc796UrObsBWX4xNVjqETmqs\"",
    "mtime": "2025-07-02T03:32:57.242Z",
    "size": 742,
    "path": "../public/_nuxt/mZjm0YDT.js"
  },
  "/_nuxt/NFmq_FRQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25e-x0p0E4KH3odZWE3ltUXkbopmjNA\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 606,
    "path": "../public/_nuxt/NFmq_FRQ.js"
  },
  "/_nuxt/Notes.DNRRypQ7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"71f-A/iqdzImL7rvSjec+W0QLe87HeQ\"",
    "mtime": "2025-07-02T03:32:56.988Z",
    "size": 1823,
    "path": "../public/_nuxt/Notes.DNRRypQ7.css"
  },
  "/_nuxt/nZ65MV0n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"316-Qnj4iUtq0oLP1gQUnWNmi7a33kI\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 790,
    "path": "../public/_nuxt/nZ65MV0n.js"
  },
  "/_nuxt/o3uBWxfy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f5a-XXTKgJCLzwBUSrPxFq3IxVDbZXE\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 8026,
    "path": "../public/_nuxt/o3uBWxfy.js"
  },
  "/_nuxt/OXOuhaQm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f2e-NFnE34SmwNOZCQMGIr2V8c7m8Mw\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 3886,
    "path": "../public/_nuxt/OXOuhaQm.js"
  },
  "/_nuxt/pattern-onboard.3h4CNwFN.png": {
    "type": "image/png",
    "etag": "\"28e7-fGpOsvY5n/bZReGytKX7WC7Cum4\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 10471,
    "path": "../public/_nuxt/pattern-onboard.3h4CNwFN.png"
  },
  "/_nuxt/Percentage.B_QR2r4o.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a14-kcLhz65xs9/djhyPh+8asKJsgb0\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 2580,
    "path": "../public/_nuxt/Percentage.B_QR2r4o.css"
  },
  "/_nuxt/Pie.C4QTgYYE.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c9-8vTlpfTYmVQRZuHCc9KjlY/shls\"",
    "mtime": "2025-07-02T03:32:57.030Z",
    "size": 201,
    "path": "../public/_nuxt/Pie.C4QTgYYE.css"
  },
  "/_nuxt/Popover.DLKWLjz2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c0-ALimyTNZJkKtDNnfAKR3wsjQx8A\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 192,
    "path": "../public/_nuxt/Popover.DLKWLjz2.css"
  },
  "/_nuxt/premium-headphones.Di49mKr_.jpg": {
    "type": "image/jpeg",
    "etag": "\"abd2-W5XJ066Se2y8S4DlX9lEU6jyAB0\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 43986,
    "path": "../public/_nuxt/premium-headphones.Di49mKr_.jpg"
  },
  "/_nuxt/Profile.DgDkOojA.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c34-TyYeptsSi1OSD2JOI7JzjUF0D1Q\"",
    "mtime": "2025-07-02T03:32:56.984Z",
    "size": 7220,
    "path": "../public/_nuxt/Profile.DgDkOojA.css"
  },
  "/_nuxt/Propiedades.Cwbwfzn7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f8-l0bE6mfpia2ueM0QHoc+vtvbe2M\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 1016,
    "path": "../public/_nuxt/Propiedades.Cwbwfzn7.css"
  },
  "/_nuxt/public-sans-latin-100-normal.DFfHHqba.woff2": {
    "type": "font/woff2",
    "etag": "\"36a0-TCISvu+s+ItorliP0BcEJU/OjO4\"",
    "mtime": "2025-07-02T03:32:56.950Z",
    "size": 13984,
    "path": "../public/_nuxt/public-sans-latin-100-normal.DFfHHqba.woff2"
  },
  "/_nuxt/public-sans-latin-100-normal.jywyQ_Bl.woff": {
    "type": "font/woff",
    "etag": "\"4558-Rz/+nY0DVlK1x1GPGF5mHls43bs\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 17752,
    "path": "../public/_nuxt/public-sans-latin-100-normal.jywyQ_Bl.woff"
  },
  "/_nuxt/public-sans-latin-200-normal.DKUNayZ8.woff2": {
    "type": "font/woff2",
    "etag": "\"3920-BQ1V75ORVoaSus5mctiAd+fBhis\"",
    "mtime": "2025-07-02T03:32:56.950Z",
    "size": 14624,
    "path": "../public/_nuxt/public-sans-latin-200-normal.DKUNayZ8.woff2"
  },
  "/_nuxt/public-sans-latin-200-normal.DMJ130l_.woff": {
    "type": "font/woff",
    "etag": "\"4874-4LT3JzFCzQmJWB1jP4Zu+BrNENw\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 18548,
    "path": "../public/_nuxt/public-sans-latin-200-normal.DMJ130l_.woff"
  },
  "/_nuxt/public-sans-latin-300-normal.C9J7XxkK.woff2": {
    "type": "font/woff2",
    "etag": "\"38e4-EJDlKdCTxFCbDh3Mp9Cb0cDKHwo\"",
    "mtime": "2025-07-02T03:32:56.950Z",
    "size": 14564,
    "path": "../public/_nuxt/public-sans-latin-300-normal.C9J7XxkK.woff2"
  },
  "/_nuxt/public-sans-latin-300-normal.qz2eajZL.woff": {
    "type": "font/woff",
    "etag": "\"4854-G52ahWZiLH5vSHgPcPrbiMJTsXk\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 18516,
    "path": "../public/_nuxt/public-sans-latin-300-normal.qz2eajZL.woff"
  },
  "/_nuxt/public-sans-latin-400-normal.8Rpg0ruU.woff2": {
    "type": "font/woff2",
    "etag": "\"3928-iX2SzIIY0aEzlACSmABPrY89Xr4\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14632,
    "path": "../public/_nuxt/public-sans-latin-400-normal.8Rpg0ruU.woff2"
  },
  "/_nuxt/public-sans-latin-400-normal.BJe8n-hT.woff": {
    "type": "font/woff",
    "etag": "\"486c-U5VxzGqHUTgQxPGLil9yT9i21b0\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 18540,
    "path": "../public/_nuxt/public-sans-latin-400-normal.BJe8n-hT.woff"
  },
  "/_nuxt/public-sans-latin-500-normal.Kkjf6c6R.woff": {
    "type": "font/woff",
    "etag": "\"4890-TLoCuUnBXUYbyRQGBIgS3qpggHU\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 18576,
    "path": "../public/_nuxt/public-sans-latin-500-normal.Kkjf6c6R.woff"
  },
  "/_nuxt/public-sans-latin-500-normal.NlrCPXnF.woff2": {
    "type": "font/woff2",
    "etag": "\"3940-baCUigUI1/n85WQoIB5vH5sH4co\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14656,
    "path": "../public/_nuxt/public-sans-latin-500-normal.NlrCPXnF.woff2"
  },
  "/_nuxt/public-sans-latin-600-normal.BjQ8ENXZ.woff": {
    "type": "font/woff",
    "etag": "\"48a8-SKPDd2BPgMvpgaykzLhd86rea9k\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 18600,
    "path": "../public/_nuxt/public-sans-latin-600-normal.BjQ8ENXZ.woff"
  },
  "/_nuxt/public-sans-latin-600-normal.Fru-LXNs.woff2": {
    "type": "font/woff2",
    "etag": "\"3900-UhY3tq2GODmpMNNPv2nnBPkASpw\"",
    "mtime": "2025-07-02T03:32:56.950Z",
    "size": 14592,
    "path": "../public/_nuxt/public-sans-latin-600-normal.Fru-LXNs.woff2"
  },
  "/_nuxt/public-sans-latin-700-normal.AugGdtWM.woff": {
    "type": "font/woff",
    "etag": "\"4904-9M5xxIXvm8Lj96omtJWtLNdVwWA\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 18692,
    "path": "../public/_nuxt/public-sans-latin-700-normal.AugGdtWM.woff"
  },
  "/_nuxt/public-sans-latin-700-normal.BqJmxWdE.woff2": {
    "type": "font/woff2",
    "etag": "\"3908-fGpPrxU4b6fQzIptJMLfMtsNrPw\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 14600,
    "path": "../public/_nuxt/public-sans-latin-700-normal.BqJmxWdE.woff2"
  },
  "/_nuxt/public-sans-latin-800-normal.Cymo4W0O.woff2": {
    "type": "font/woff2",
    "etag": "\"39b4-MfqfJa1yIjSO5YtXUMP9qZzzgH8\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 14772,
    "path": "../public/_nuxt/public-sans-latin-800-normal.Cymo4W0O.woff2"
  },
  "/_nuxt/public-sans-latin-800-normal.wIV93fwq.woff": {
    "type": "font/woff",
    "etag": "\"48d4-JiMEDXJtUHEVYtTDAotIWU3m7lU\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 18644,
    "path": "../public/_nuxt/public-sans-latin-800-normal.wIV93fwq.woff"
  },
  "/_nuxt/public-sans-latin-900-normal.ComRs1a5.woff2": {
    "type": "font/woff2",
    "etag": "\"3694-TqJkkFjrFbp03Obix2EWkagGONI\"",
    "mtime": "2025-07-02T03:32:56.956Z",
    "size": 13972,
    "path": "../public/_nuxt/public-sans-latin-900-normal.ComRs1a5.woff2"
  },
  "/_nuxt/public-sans-latin-900-normal.DOa3hBzc.woff": {
    "type": "font/woff",
    "etag": "\"4574-cmBJhYgqRq/YyST4dTwIe7oGqkQ\"",
    "mtime": "2025-07-02T03:32:56.975Z",
    "size": 17780,
    "path": "../public/_nuxt/public-sans-latin-900-normal.DOa3hBzc.woff"
  },
  "/_nuxt/PzWrsCxn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a9d-gvDbkYjzeyhPqV0sSlxpkEq88NA\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 2717,
    "path": "../public/_nuxt/PzWrsCxn.js"
  },
  "/_nuxt/q1QbOuh_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4fb-S4Vak6qCp8YTTAdlaFfnUzaHIbY\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 1275,
    "path": "../public/_nuxt/q1QbOuh_.js"
  },
  "/_nuxt/QDgBuMY_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"525-DNjJhqHBb3Ft+ITy5TaLNndpma0\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 1317,
    "path": "../public/_nuxt/QDgBuMY_.js"
  },
  "/_nuxt/qlMVXjeq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"468-r9vYqlvCar1TJVFXCVTdL1Sl76I\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 1128,
    "path": "../public/_nuxt/qlMVXjeq.js"
  },
  "/_nuxt/quill-override.DOgUs1sN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b4f-ZdE5dGAsxRfkSx56I8fDal3kn1g\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 23375,
    "path": "../public/_nuxt/quill-override.DOgUs1sN.css"
  },
  "/_nuxt/Radar.CwMDEFgN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9d-vAe4cypaDzxEFZpWgNyNgtYqKqM\"",
    "mtime": "2025-07-02T03:32:57.030Z",
    "size": 157,
    "path": "../public/_nuxt/Radar.CwMDEFgN.css"
  },
  "/_nuxt/Register.DhAgFaz8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43e-iU6y19xn7i6NMgXAnnaVLYMCWfY\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 1086,
    "path": "../public/_nuxt/Register.DhAgFaz8.css"
  },
  "/_nuxt/Reservas.BWatwHw8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-kjB6OYztUdVVtR9a9xcPaEDREKE\"",
    "mtime": "2025-07-02T03:32:56.988Z",
    "size": 62,
    "path": "../public/_nuxt/Reservas.BWatwHw8.css"
  },
  "/_nuxt/RightSidebar.ldpvlxfe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"115-iOKbO79Yrj+4Rj+NgUSx/2GjyKE\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 277,
    "path": "../public/_nuxt/RightSidebar.ldpvlxfe.css"
  },
  "/_nuxt/sDuJ--lx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9c0-uz/ypKDqRJE1iFNR5jfKhz89Gzo\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 2496,
    "path": "../public/_nuxt/sDuJ--lx.js"
  },
  "/_nuxt/SegmentedPage.CPwDoo3M.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13fe-wr3Tjx9ABrJ9mR+k60TxM7KJFRw\"",
    "mtime": "2025-07-02T03:32:57.007Z",
    "size": 5118,
    "path": "../public/_nuxt/SegmentedPage.CPwDoo3M.css"
  },
  "/_nuxt/Ss8l3UWj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6bb-SL71gJ9ulfL8ye57W410PS/vae0\"",
    "mtime": "2025-07-02T03:32:57.101Z",
    "size": 1723,
    "path": "../public/_nuxt/Ss8l3UWj.js"
  },
  "/_nuxt/Steps.BUjVsZvK.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3e-DAvNrtm3dFTGo0x/p2+/0ueRUsE\"",
    "mtime": "2025-07-02T03:32:57.016Z",
    "size": 62,
    "path": "../public/_nuxt/Steps.BUjVsZvK.css"
  },
  "/_nuxt/super-bike.DZT02ln9.jpg": {
    "type": "image/jpeg",
    "etag": "\"fa68-Wa53ffCwu2MNcbUhYe0SEXUaMzI\"",
    "mtime": "2025-07-02T03:32:56.928Z",
    "size": 64104,
    "path": "../public/_nuxt/super-bike.DZT02ln9.jpg"
  },
  "/_nuxt/Tiptap.Dr6zfh2n.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a28-xxXm3XmhNaWPmIxW7MSnAe43KzU\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 2600,
    "path": "../public/_nuxt/Tiptap.Dr6zfh2n.css"
  },
  "/_nuxt/Tour.Bxd6BNT8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11df-csiK52rt8n8kfSLAaLjUI6ZFU9w\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 4575,
    "path": "../public/_nuxt/Tour.Bxd6BNT8.css"
  },
  "/_nuxt/tQMtZKWF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"78a-sJZdELNgmXiA7Z0pMkGE7zCI0NY\"",
    "mtime": "2025-07-02T03:32:57.154Z",
    "size": 1930,
    "path": "../public/_nuxt/tQMtZKWF.js"
  },
  "/_nuxt/tYIRu9eB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"152-GxF5COMQ2pY+DsVS1O4edgl9dWc\"",
    "mtime": "2025-07-02T03:32:57.054Z",
    "size": 338,
    "path": "../public/_nuxt/tYIRu9eB.js"
  },
  "/_nuxt/Typography.BjuAF-3i.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"94d-fVx9aK1SOP/TXfgHQRi7wveVLsQ\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 2381,
    "path": "../public/_nuxt/Typography.BjuAF-3i.css"
  },
  "/_nuxt/uEBjI3Ye.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c74-96lUjVvJB1xB+mBEaS3ktxje4HU\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 3188,
    "path": "../public/_nuxt/uEBjI3Ye.js"
  },
  "/_nuxt/UXPk78Ap.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"970-I9thBCxfvlcwwK0eBrbKluIntXI\"",
    "mtime": "2025-07-02T03:32:57.164Z",
    "size": 2416,
    "path": "../public/_nuxt/UXPk78Ap.js"
  },
  "/_nuxt/V3h-1af8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f8-zlV5+6wUKFBPsPcExc5u9v7ikhk\"",
    "mtime": "2025-07-02T03:32:57.242Z",
    "size": 760,
    "path": "../public/_nuxt/V3h-1af8.js"
  },
  "/_nuxt/vcalendar-override.8FDTwfAf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6203-qfOm1Rif6OyOVNUw3QjcuC8rIi0\"",
    "mtime": "2025-07-02T03:32:57.014Z",
    "size": 25091,
    "path": "../public/_nuxt/vcalendar-override.8FDTwfAf.css"
  },
  "/_nuxt/VectorMap.D1NeUJCv.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"190-p5s3aYDjocaHWu/Xn+l8R/FEK/U\"",
    "mtime": "2025-07-02T03:32:56.991Z",
    "size": 400,
    "path": "../public/_nuxt/VectorMap.D1NeUJCv.css"
  },
  "/_nuxt/vqgjGyMx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33f-BNCHH7LL9iO3AZmYcWUVwA/3SGs\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 831,
    "path": "../public/_nuxt/vqgjGyMx.js"
  },
  "/_nuxt/VueCal.GybcXp25.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"69d5-qX0cYLJmnDLChn8lquBvMvWt9PQ\"",
    "mtime": "2025-07-02T03:32:57.022Z",
    "size": 27093,
    "path": "../public/_nuxt/VueCal.GybcXp25.css"
  },
  "/_nuxt/WHZHfYoQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f3-hRV//3AxlkMZ1yEhjz9aexu0pcA\"",
    "mtime": "2025-07-02T03:32:57.087Z",
    "size": 755,
    "path": "../public/_nuxt/WHZHfYoQ.js"
  },
  "/_nuxt/WnHKWuOw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"549-4WVpro+Jj50e1gQP9Bni+/sqT74\"",
    "mtime": "2025-07-02T03:32:57.211Z",
    "size": 1353,
    "path": "../public/_nuxt/WnHKWuOw.js"
  },
  "/_nuxt/xdJ8wMps.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1043-eQ9/2eZSK2Go+uB4NGTmwF4VyT8\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 4163,
    "path": "../public/_nuxt/xdJ8wMps.js"
  },
  "/_nuxt/XnlJYeGH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"385-GxBkE4ARfY7D1r6YVbqTjEOdF6w\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 901,
    "path": "../public/_nuxt/XnlJYeGH.js"
  },
  "/_nuxt/xoEBAxBw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"104d-gkXfYURytUWnPUm+Jujg3rq/MRI\"",
    "mtime": "2025-07-02T03:32:57.170Z",
    "size": 4173,
    "path": "../public/_nuxt/xoEBAxBw.js"
  },
  "/_nuxt/Y-X9DOqu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9e2-QWaCC8G9IEO4IeR7VuDdF2d4Zqs\"",
    "mtime": "2025-07-02T03:32:57.179Z",
    "size": 2530,
    "path": "../public/_nuxt/Y-X9DOqu.js"
  },
  "/_nuxt/YZet1as4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38a-unKuMvS66Nm/fjvlL9Jz0UQz4DM\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 906,
    "path": "../public/_nuxt/YZet1as4.js"
  },
  "/_nuxt/ZtRmvXob.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d0-ZpI3xIZyOO+5AAX91dggj+nLiz8\"",
    "mtime": "2025-07-02T03:32:57.038Z",
    "size": 976,
    "path": "../public/_nuxt/ZtRmvXob.js"
  },
  "/_nuxt/_2m-F2FS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e6-eteVL8kn7jTdnfIyQaA6V7OOWAw\"",
    "mtime": "2025-07-02T03:32:57.227Z",
    "size": 742,
    "path": "../public/_nuxt/_2m-F2FS.js"
  },
  "/_nuxt/_6B4UQXy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33a-ciZNXR2WovxydDy95TTV6WwdBb8\"",
    "mtime": "2025-07-02T03:32:57.246Z",
    "size": 826,
    "path": "../public/_nuxt/_6B4UQXy.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-YtCyKg5fUHKZPJDQVpwfNT0m8Eo\"",
    "mtime": "2025-07-02T03:34:18.011Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/2b301646-f35c-498e-ae7b-176163bab8ff.json": {
    "type": "application/json",
    "etag": "\"8b-jwvGtZfpXYCQwmu9H2wcBHTuN7U\"",
    "mtime": "2025-07-02T03:34:18.013Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/2b301646-f35c-498e-ae7b-176163bab8ff.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _IbnChi = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _SxA8c9 = defineEventHandler(() => {});

const _lazy_Gp5IfA = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _IbnChi, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Gp5IfA, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Gp5IfA, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return O(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

export { $fetch as $, getCookie as A, deleteCookie as B, trapUnhandledNodeErrors as a, useNitroApp as b, getResponseStatus as c, destr as d, defineRenderHandler as e, getQuery as f, getResponseStatusText as g, createError$1 as h, getRouteRules as i, joinRelativeURL as j, getContext as k, createHooks as l, executeAsync as m, toRouteMatcher as n, createRouter$1 as o, defu as p, getRequestHeaders as q, sanitizeStatusCode as r, setupGracefulShutdown as s, toNodeListener as t, useRuntimeConfig as u, getRequestProtocol as v, klona as w, getRequestHeader as x, isEqual as y, setCookie as z };
//# sourceMappingURL=nitro.mjs.map
