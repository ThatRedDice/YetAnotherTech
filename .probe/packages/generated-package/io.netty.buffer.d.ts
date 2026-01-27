declare module "io.netty.buffer.ByteBuf" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Charset$$Type} from "java.nio.charset.Charset"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ByteBufConvertible$$Interface} from "io.netty.buffer.ByteBufConvertible"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$ReferenceCounted, $ReferenceCounted$$Interface} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBufAllocator} from "io.netty.buffer.ByteBufAllocator"
import {$FileChannel$$Type} from "java.nio.channels.FileChannel"
import {$ByteProcessor$$Type} from "io.netty.util.ByteProcessor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuf implements $ReferenceCounted$$Interface, $Comparable$$Interface<($ByteBuf)>, $ByteBufConvertible$$Interface {
constructor()

public "memoryAddress"(): long
public "maxCapacity"(): integer
public "alloc"(): $ByteBufAllocator
public "readerIndex"(arg0: integer): $ByteBuf
public "readerIndex"(): integer
public "writerIndex"(): integer
public "writerIndex"(arg0: integer): $ByteBuf
public "readableBytes"(): integer
public "writableBytes"(): integer
public "maxWritableBytes"(): integer
public "maxFastWritableBytes"(): integer
public "markReaderIndex"(): $ByteBuf
public "resetReaderIndex"(): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "resetWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "discardSomeReadBytes"(): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "getUnsignedByte"(arg0: integer): short
public "getShortLE"(arg0: integer): short
public "getUnsignedShortLE"(arg0: integer): integer
public "getMedium"(arg0: integer): integer
public "getMediumLE"(arg0: integer): integer
public "getUnsignedMedium"(arg0: integer): integer
public "getUnsignedMediumLE"(arg0: integer): integer
public "getIntLE"(arg0: integer): integer
public "getUnsignedInt"(arg0: integer): long
public "getUnsignedIntLE"(arg0: integer): long
public "getLongLE"(arg0: integer): long
public "getFloatLE"(arg0: integer): float
public "getDoubleLE"(arg0: integer): double
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "setFloatLE"(arg0: integer, arg1: float): $ByteBuf
public "setDoubleLE"(arg0: integer, arg1: double): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "readShortLE"(): short
public "readUnsignedShortLE"(): integer
public "readMedium"(): integer
public "readMediumLE"(): integer
public "readUnsignedMedium"(): integer
public "readUnsignedMediumLE"(): integer
public "readIntLE"(): integer
public "readUnsignedInt"(): long
public "readUnsignedIntLE"(): long
public "readLongLE"(): long
public "readFloatLE"(): float
public "readDoubleLE"(): double
public "readSlice"(arg0: integer): $ByteBuf
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeMediumLE"(arg0: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "writeLongLE"(arg0: long): $ByteBuf
public "writeFloatLE"(arg0: float): $ByteBuf
public "writeDoubleLE"(arg0: double): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "bytesBefore"(arg0: byte): integer
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "nioBufferCount"(): integer
public "nioBuffer"(): $ByteBuffer
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
public "hasMemoryAddress"(): boolean
public "isContiguous"(): boolean
public "asByteBuf"(): $ByteBuf
public "retain"(arg0: integer): $ReferenceCounted
public "retain"(): $ByteBuf
public "readUnsignedByte"(): short
public "readUnsignedShort"(): integer
public "writeShort"(arg0: integer): $ByteBuf
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readShort"(): short
public "readLong"(): long
public "readDouble"(): double
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(): boolean
public "isReadable"(arg0: integer): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "getUnsignedShort"(arg0: integer): integer
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "asReadOnly"(): $ByteBuf
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "equals"(arg0: any): boolean
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): StringJS
public "toString"(): StringJS
public "toString"(arg0: $Charset$$Type): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(arg0: integer): $ByteBuf
public "capacity"(): integer
public "isReadOnly"(): boolean
public "slice"(): $ByteBuf
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
/**
 * 
 * @deprecated
 */
public "order"(): $ByteOrder
/**
 * 
 * @deprecated
 */
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public "touch"(): $ByteBuf
public "touch"(arg0: any): $ReferenceCounted
public "refCnt"(): integer
public "release"(): boolean
public "release"(arg0: integer): boolean
get "contiguous"(): boolean
get "readable"(): boolean
get "writable"(): boolean
get "direct"(): boolean
get "readOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBuf$$Type = ($ByteBuf);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteBuf$$Original = $ByteBuf;}
declare module "io.netty.buffer.ByteBufAllocator" {
import {$CompositeByteBuf} from "io.netty.buffer.CompositeByteBuf"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufAllocator$$Interface {
get "directBufferPooled"(): boolean
}

export class $ByteBufAllocator implements $ByteBufAllocator$$Interface {
static readonly "DEFAULT": $ByteBufAllocator

 "calculateNewCapacity"(arg0: integer, arg1: integer): integer
 "compositeBuffer"(): $CompositeByteBuf
 "compositeBuffer"(arg0: integer): $CompositeByteBuf
 "heapBuffer"(): $ByteBuf
 "heapBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "heapBuffer"(arg0: integer): $ByteBuf
 "ioBuffer"(): $ByteBuf
 "ioBuffer"(arg0: integer): $ByteBuf
 "ioBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "compositeHeapBuffer"(arg0: integer): $CompositeByteBuf
 "compositeHeapBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(arg0: integer): $CompositeByteBuf
 "isDirectBufferPooled"(): boolean
 "buffer"(arg0: integer): $ByteBuf
 "buffer"(): $ByteBuf
 "buffer"(arg0: integer, arg1: integer): $ByteBuf
 "directBuffer"(arg0: integer): $ByteBuf
 "directBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "directBuffer"(): $ByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufAllocator$$Type = ($ByteBufAllocator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteBufAllocator$$Original = $ByteBufAllocator;}
declare module "io.netty.buffer.AbstractByteBuf" {
import {$ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Charset$$Type} from "java.nio.charset.Charset"
import {$ReferenceCounted} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream$$Type} from "java.io.InputStream"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$FileChannel$$Type} from "java.nio.channels.FileChannel"
import {$ByteProcessor$$Type} from "io.netty.util.ByteProcessor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractByteBuf extends $ByteBuf {
public "maxCapacity"(): integer
public "readerIndex"(): integer
public "readerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(): integer
public "readableBytes"(): integer
public "writableBytes"(): integer
public "maxWritableBytes"(): integer
public "markReaderIndex"(): $ByteBuf
public "resetReaderIndex"(): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "resetWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "discardSomeReadBytes"(): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "getUnsignedByte"(arg0: integer): short
public "getShortLE"(arg0: integer): short
public "getUnsignedShortLE"(arg0: integer): integer
public "getMedium"(arg0: integer): integer
public "getMediumLE"(arg0: integer): integer
public "getUnsignedMedium"(arg0: integer): integer
public "getUnsignedMediumLE"(arg0: integer): integer
public "getIntLE"(arg0: integer): integer
public "getUnsignedInt"(arg0: integer): long
public "getUnsignedIntLE"(arg0: integer): long
public "getLongLE"(arg0: integer): long
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "readShortLE"(): short
public "readUnsignedShortLE"(): integer
public "readMedium"(): integer
public "readMediumLE"(): integer
public "readUnsignedMedium"(): integer
public "readUnsignedMediumLE"(): integer
public "readIntLE"(): integer
public "readUnsignedInt"(): long
public "readUnsignedIntLE"(): long
public "readLongLE"(): long
public "readSlice"(arg0: integer): $ByteBuf
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeMediumLE"(arg0: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "writeLongLE"(arg0: long): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: byte): integer
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "nioBuffer"(): $ByteBuffer
public "nioBuffers"(): ($ByteBuffer)[]
public "readUnsignedByte"(): short
public "readUnsignedShort"(): integer
public "writeShort"(arg0: integer): $ByteBuf
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readShort"(): short
public "readLong"(): long
public "readDouble"(): double
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(arg0: integer): boolean
public "isReadable"(): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "getUnsignedShort"(arg0: integer): integer
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "asReadOnly"(): $ByteBuf
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "equals"(arg0: any): boolean
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): StringJS
public "toString"(arg0: $Charset$$Type): StringJS
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "isReadOnly"(): boolean
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "slice"(): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "retain"(arg0: integer): $ReferenceCounted
public "touch"(arg0: any): $ReferenceCounted
get "readable"(): boolean
get "writable"(): boolean
get "readOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractByteBuf$$Type = ($AbstractByteBuf);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractByteBuf$$Original = $AbstractByteBuf;}
declare module "io.netty.buffer.CompositeByteBuf" {
import {$Iterable$$Type, $Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$ByteOrder} from "java.nio.ByteOrder"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$AbstractReferenceCountedByteBuf} from "io.netty.buffer.AbstractReferenceCountedByteBuf"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ReferenceCounted} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$FileChannel$$Type} from "java.nio.channels.FileChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CompositeByteBuf extends $AbstractReferenceCountedByteBuf implements $Iterable$$Interface<($ByteBuf)> {
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer)
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer, ...arg3: ($ByteBuf$$Type)[])
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer, arg3: $Iterable$$Type<($ByteBuf$$Type)>)

public "memoryAddress"(): long
public "alloc"(): $ByteBufAllocator
public "readerIndex"(arg0: integer): $CompositeByteBuf
public "writerIndex"(arg0: integer): $CompositeByteBuf
public "markReaderIndex"(): $ByteBuf
public "resetReaderIndex"(): $CompositeByteBuf
public "markWriterIndex"(): $CompositeByteBuf
public "resetWriterIndex"(): $CompositeByteBuf
public "discardReadBytes"(): $ByteBuf
public "discardSomeReadBytes"(): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "setMedium"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "nioBufferCount"(): integer
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
public "hasMemoryAddress"(): boolean
public "retain"(arg0: integer): $ReferenceCounted
public "retain"(): $CompositeByteBuf
public "maxNumComponents"(): integer
public "numComponents"(): integer
public "removeComponent"(arg0: integer): $CompositeByteBuf
public "removeComponents"(arg0: integer, arg1: integer): $CompositeByteBuf
public "toComponentIndex"(arg0: integer): integer
public "toByteIndex"(arg0: integer): integer
public "componentAtOffset"(arg0: integer): $ByteBuf
public "internalComponent"(arg0: integer): $ByteBuf
public "internalComponentAtOffset"(arg0: integer): $ByteBuf
public "discardReadComponents"(): $CompositeByteBuf
public "addComponents"(...arg0: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: boolean, arg1: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(arg0: boolean, ...arg1: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(arg0: integer, ...arg1: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: integer, arg1: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addFlattenedComponents"(arg0: boolean, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "writeShort"(arg0: integer): $CompositeByteBuf
public "skipBytes"(arg0: integer): $CompositeByteBuf
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $CompositeByteBuf
public "writeChar"(arg0: integer): $CompositeByteBuf
public "writeFloat"(arg0: float): $ByteBuf
public "decompose"(arg0: integer, arg1: integer): $List<($ByteBuf)>
public "setIndex"(arg0: integer, arg1: integer): $CompositeByteBuf
public "toString"(): StringJS
public "getByte"(arg0: integer): byte
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "iterator"(): $Iterator<($ByteBuf)>
public "component"(arg0: integer): $ByteBuf
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $ByteBuf
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setLong"(arg0: integer, arg1: long): $CompositeByteBuf
public "setFloat"(arg0: integer, arg1: float): $CompositeByteBuf
public "setDouble"(arg0: integer, arg1: double): $CompositeByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(arg0: integer): $ByteBuf
public "capacity"(): integer
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $CompositeByteBuf
public "readBytes"(arg0: (byte)[]): $CompositeByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $CompositeByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $CompositeByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $CompositeByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[]): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "order"(): $ByteOrder
public "addComponent"(arg0: boolean, arg1: integer, arg2: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: boolean, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: integer, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: $ByteBuf$$Type): $CompositeByteBuf
public "consolidate"(arg0: integer, arg1: integer): $CompositeByteBuf
public "consolidate"(): $CompositeByteBuf
public "touch"(): $ReferenceCounted
public "touch"(arg0: any): $ByteBuf
public "spliterator"(): $Spliterator<($ByteBuf)>
public "forEach"(arg0: $Consumer$$Type<($ByteBuf)>): void
[Symbol.iterator](): IterableIterator<$ByteBuf>;
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeByteBuf$$Type = ($CompositeByteBuf);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompositeByteBuf$$Original = $CompositeByteBuf;}
declare module "io.netty.buffer.AbstractReferenceCountedByteBuf" {
import {$ReferenceCounted} from "io.netty.util.ReferenceCounted"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$AbstractByteBuf} from "io.netty.buffer.AbstractByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractReferenceCountedByteBuf extends $AbstractByteBuf {
public "retain"(arg0: integer): $ReferenceCounted
public "retain"(): $ReferenceCounted
public "refCnt"(): integer
public "release"(arg0: integer): boolean
public "release"(): boolean
public "touch"(): $ByteBuf
public "touch"(arg0: any): $ReferenceCounted
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReferenceCountedByteBuf$$Type = ($AbstractReferenceCountedByteBuf);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractReferenceCountedByteBuf$$Original = $AbstractReferenceCountedByteBuf;}
declare module "io.netty.buffer.ByteBufConvertible" {
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufConvertible$$Interface {

(): $ByteBuf$$Type
}

export class $ByteBufConvertible implements $ByteBufConvertible$$Interface {
 "asByteBuf"(): $ByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufConvertible$$Type = (() => $ByteBuf$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ByteBufConvertible$$Original = $ByteBufConvertible;}
