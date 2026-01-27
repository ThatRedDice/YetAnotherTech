declare module "net.neoforged.neoforge.resource.ContextAwareReloadListener" {
import {$ConditionalOps} from "net.neoforged.neoforge.common.conditions.ConditionalOps"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ContextAwareReloadListenerAccessor$$Interface} from "com.almostreliable.unified.mixin.neoforge.ContextAwareReloadListenerAccessor"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ContextAwareReloadListenerAccessor$$Interface as $ContextAwareReloadListenerAccessor$0$$Interface} from "net.mehvahdjukaar.moonlight.core.mixins.neoforge.ContextAwareReloadListenerAccessor"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ContextAwareReloadListener implements $PreparableReloadListener$$Interface, $ContextAwareReloadListenerAccessor$0$$Interface, $ContextAwareReloadListenerAccessor$$Interface {
constructor()

public "invokeGetContext"(): $ICondition$IContext
public "au$makeConditionalOps"(): $ConditionalOps
public "injectContext"(arg0: $ICondition$IContext$$Type, arg1: $HolderLookup$Provider$$Type): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextAwareReloadListener$$Type = ($ContextAwareReloadListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextAwareReloadListener$$Original = $ContextAwareReloadListener;}
