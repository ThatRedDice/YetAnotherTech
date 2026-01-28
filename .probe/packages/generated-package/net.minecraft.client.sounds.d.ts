declare module "net.minecraft.client.sounds.SoundManager$Preparations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundManager$Preparations {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManager$Preparations$$Type = ($SoundManager$Preparations);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundManager$Preparations$$Original = $SoundManager$Preparations;}
declare module "net.minecraft.client.sounds.SoundEngineExecutor" {
import {$BlockableEventLoop} from "net.minecraft.util.thread.BlockableEventLoop"
import {$Runnable} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $SoundEngineExecutor extends $BlockableEventLoop<($Runnable)> {
constructor()

public "flush"(): void
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngineExecutor$$Type = ($SoundEngineExecutor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEngineExecutor$$Original = $SoundEngineExecutor;}
declare module "net.minecraft.client.sounds.SoundEngine" {
import {$Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$SoundEngineExecutor} from "net.minecraft.client.sounds.SoundEngineExecutor"
import {$ListenerTransform} from "com.mojang.blaze3d.audio.ListenerTransform"
import {$List} from "java.util.List"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$TickableSoundInstance$$Type} from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$SoundManager, $SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundEventListener$$Type} from "net.minecraft.client.sounds.SoundEventListener"
import {$IMixinSoundEngine$$Interface} from "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundEngine"

export class $SoundEngine implements $IMixinSoundEngine$$Interface {
static readonly "MISSING_SOUND": StringJS
readonly "executor": $SoundEngineExecutor
readonly "soundManager": $SoundManager
readonly "instanceBySource": $Multimap<($SoundSource), ($SoundInstance)>
static readonly "OPEN_AL_SOFT_PREFIX": StringJS
static readonly "OPEN_AL_SOFT_PREFIX_LENGTH": integer

constructor(arg0: $SoundManager$$Type, arg1: $Options$$Type, arg2: $ResourceProvider$$Type)

public "getDebugString"(): StringJS
public "getListenerTransform"(): $ListenerTransform
public "updateCategoryVolume"(arg0: $SoundSource$$Type, arg1: float): void
public "stopAll"(): void
public "tick"(arg0: boolean): void
public "addEventListener"(arg0: $SoundEventListener$$Type): void
public "reload"(): void
public "removeEventListener"(arg0: $SoundEventListener$$Type): void
public "stop"(arg0: $ResourceLocation$$Type, arg1: $SoundSource$$Type): void
public "stop"(arg0: $SoundInstance$$Type): void
public "resume"(): void
public "destroy"(): void
public "isActive"(arg0: $SoundInstance$$Type): boolean
public "getAvailableSoundDevices"(): $List<(StringJS)>
public "play"(arg0: $SoundInstance$$Type): void
public "pause"(): void
public "emergencyShutdown"(): void
public "updateSource"(arg0: $Camera$$Type): void
public "playDelayed"(arg0: $SoundInstance$$Type, arg1: integer): void
public "queueTickingSound"(arg0: $TickableSoundInstance$$Type): void
public "modifyExpressionValue$eec000$immersiveengineering$adjustVolumeAtStart"(arg0: float, arg1: $SoundInstance$$Type): float
public "modifyReturnValue$eec000$immersiveengineering$adjustVolumeForEarmuffs"(arg0: float, arg1: $SoundInstance$$Type): float
public "getLoadedMelody"(): boolean
public "requestPreload"(arg0: $Sound$$Type): void
get "debugString"(): StringJS
get "listenerTransform"(): $ListenerTransform
get "availableSoundDevices"(): $List<(StringJS)>
get "loadedMelody"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngine$$Type = ($SoundEngine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEngine$$Original = $SoundEngine;}
declare module "net.minecraft.client.sounds.Weighted" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"

export interface $Weighted$$Interface<T> {
get "weight"(): integer
}

export class $Weighted<T> implements $Weighted$$Interface {
 "getWeight"(): integer
 "getSound"(arg0: $RandomSource$$Type): T
 "preloadIfRequired"(arg0: $SoundEngine$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Weighted$$Type<T> = ($Weighted<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Weighted$$Original<T> = $Weighted<(T)>;}
declare module "net.minecraft.client.sounds.MusicManager" {
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$SoundInstance} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$Music$$Type} from "net.minecraft.sounds.Music"
import {$IMixinMusicManager$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMusicManager"

export class $MusicManager implements $IMixinMusicManager$$Interface {
constructor(arg0: $Minecraft$$Type)

public "getCurrentMusic_FancyMenu"(): $SoundInstance
public "stopPlaying"(arg0: $Music$$Type): void
public "stopPlaying"(): void
public "startPlaying"(arg0: $Music$$Type): void
public "tick"(): void
public "isPlayingMusic"(arg0: $Music$$Type): boolean
get "currentMusic_FancyMenu"(): $SoundInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MusicManager$$Type = ($MusicManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MusicManager$$Original = $MusicManager;}
declare module "net.minecraft.client.sounds.SoundBufferLibrary" {
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$Collection$$Type} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$AudioStream} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBuffer} from "com.mojang.blaze3d.audio.SoundBuffer"

export class $SoundBufferLibrary {
constructor(arg0: $ResourceProvider$$Type)

public "getStream"(arg0: $ResourceLocation$$Type, arg1: boolean): $CompletableFuture<($AudioStream)>
public "clear"(): void
public "preload"(arg0: $Collection$$Type<($Sound$$Type)>): $CompletableFuture<(never)>
public "getCompleteBuffer"(arg0: $ResourceLocation$$Type): $CompletableFuture<($SoundBuffer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBufferLibrary$$Type = ($SoundBufferLibrary);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundBufferLibrary$$Original = $SoundBufferLibrary;}
declare module "net.minecraft.client.sounds.SoundManager" {
import {$SoundManager$Preparations} from "net.minecraft.client.sounds.SoundManager$Preparations"
import {$Collection} from "java.util.Collection"
import {$Sound} from "net.minecraft.client.resources.sounds.Sound"
import {$ListenerTransform} from "com.mojang.blaze3d.audio.ListenerTransform"
import {$SoundEngine} from "net.minecraft.client.sounds.SoundEngine"
import {$List} from "java.util.List"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import {$TickableSoundInstance$$Type} from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import {$IMixinSoundManager$$Interface} from "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundManager"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$WeighedSoundEvents} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundEventListener$$Type} from "net.minecraft.client.sounds.SoundEventListener"

export class $SoundManager extends $SimplePreparableReloadListener<($SoundManager$Preparations)> implements $IMixinSoundManager$$Interface {
static readonly "EMPTY_SOUND": $Sound
static readonly "INTENTIONALLY_EMPTY_SOUND_EVENT": $WeighedSoundEvents
static readonly "EMPTY_SOUND_LOCATION": $ResourceLocation
readonly "soundEngine": $SoundEngine
static readonly "INTENTIONALLY_EMPTY_SOUND_LOCATION": $ResourceLocation
static readonly "INTENTIONALLY_EMPTY_SOUND": $Sound

constructor(arg0: $Options$$Type)

public "getDebugString"(): StringJS
public "getListenerTransform"(): $ListenerTransform
public "getSoundEngineMelody"(): $SoundEngine
public "getSoundEvent"(arg0: $ResourceLocation$$Type): $WeighedSoundEvents
public "getAvailableSounds"(): $Collection<($ResourceLocation)>
public "tick"(arg0: boolean): void
public "reload"(): void
public "stop"(arg0: $SoundInstance$$Type): void
public "stop"(arg0: $ResourceLocation$$Type, arg1: $SoundSource$$Type): void
public "stop"(): void
public "resume"(): void
public "destroy"(): void
public "isActive"(arg0: $SoundInstance$$Type): boolean
public "removeListener"(arg0: $SoundEventListener$$Type): void
public "addListener"(arg0: $SoundEventListener$$Type): void
public "updateSourceVolume"(arg0: $SoundSource$$Type, arg1: float): void
public "getAvailableSoundDevices"(): $List<(StringJS)>
public "play"(arg0: $SoundInstance$$Type): void
public "pause"(): void
public "emergencyShutdown"(): void
public "updateSource"(arg0: $Camera$$Type): void
public "playDelayed"(arg0: $SoundInstance$$Type, arg1: integer): void
public "queueTickingSound"(arg0: $TickableSoundInstance$$Type): void
get "debugString"(): StringJS
get "listenerTransform"(): $ListenerTransform
get "soundEngineMelody"(): $SoundEngine
get "availableSounds"(): $Collection<($ResourceLocation)>
get "availableSoundDevices"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManager$$Type = ($SoundManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundManager$$Original = $SoundManager;}
declare module "net.minecraft.client.sounds.AudioStream" {
import {$AudioFormat} from "javax.sound.sampled.AudioFormat"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export interface $AudioStream$$Interface extends $Closeable$$Interface {
get "format"(): $AudioFormat
}

export class $AudioStream implements $AudioStream$$Interface {
 "getFormat"(): $AudioFormat
 "read"(arg0: integer): $ByteBuffer
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioStream$$Type = ($AudioStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AudioStream$$Original = $AudioStream;}
declare module "net.minecraft.client.sounds.WeighedSoundEvents" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Sound, $Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"
import {$Weighted$$Type, $Weighted$$Interface} from "net.minecraft.client.sounds.Weighted"
import {$Component} from "net.minecraft.network.chat.Component"

export class $WeighedSoundEvents implements $Weighted$$Interface<($Sound)> {
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS)

public "getSubtitle"(): $Component
public "addSound"(arg0: $Weighted$$Type<($Sound$$Type)>): void
public "getWeight"(): integer
public "getSound"(arg0: $RandomSource$$Type): any
public "preloadIfRequired"(arg0: $SoundEngine$$Type): void
get "subtitle"(): $Component
get "weight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeighedSoundEvents$$Type = ($WeighedSoundEvents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeighedSoundEvents$$Original = $WeighedSoundEvents;}
declare module "net.minecraft.client.sounds.SoundEventListener" {
import {$WeighedSoundEvents, $WeighedSoundEvents$$Type} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $SoundEventListener$$Interface {

(arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: float): void
}

export class $SoundEventListener implements $SoundEventListener$$Interface {
 "onPlaySound"(arg0: $SoundInstance$$Type, arg1: $WeighedSoundEvents$$Type, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEventListener$$Type = ((arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEventListener$$Original = $SoundEventListener;}
