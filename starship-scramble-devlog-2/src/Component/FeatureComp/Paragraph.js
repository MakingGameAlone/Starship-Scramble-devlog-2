import React from 'react'
import './Paragraph.css'


function Paragraph() {
    return (
        <div className='paragraph-container'>
            <h4>Ship building</h4>

            <div></div>
            <p> Welcome to Starship Scramble! Prepare to unleash your creativity and engineering skill as you design and construct a battleship and survive through enemies' attack.
                As a player, you are given with a vast array of modules, weapons, tune-up and crews, the possibilities are limitless. We will discuss more on those tools below.
            </p>

            <div className='divider'></div>

            <h4>Modules & Weapons</h4>
            <p>To build a larger ship, you need attachment ports which are provided by CONNECTOR modules. And since you are more likely to get hit with bigger ship, connectors also provide you with bonus maximum hull point.</p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_1.png'} alt="connector" />

            <p>The second most crucial component in expansion is POWER GENERATOR. Many other modules require power to perform, therefore, you will need to keep this stat in mind when designing the ship.
                I don't plan for them to be complicated and therefore, they have no functions outside of providing power to run the ship.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_2.png'} alt="power generator" />
            
            <p>There are a lots of unique modules that perform different tasks. However, I think players should experience those for themselves and will focus on THRUSTERS.
                Thruster generally increases weightload and movementspeed, however, each thruster has various passive that improves driving performance differently. You need to keep in mind, each mainship has a capacity of thrusters, you can exceed the capacity but the effect is reduced. 
                Load a lots of them and you move faster than your own bullets.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_3.png'} alt="power generator" />
            <p>Now let's start the fun part, weapons! There are currently 9 categories of weapons, I would leave examples below.</p>
            
            <h5>Physical Weapon</h5>
            <p>As the basic type in the game, physical weapons focus on dealing damage. However, they have certain gimmicks of their own such as multiples cannons, burst of projectiles, homing missles, explosion and much more...</p>
            <p>There are melee weapons in this class, and due to the range disadvange, they deals insane damage in a large area. Somes have specialty such as Great Stars would swing arround, or Savage Edge would destroy hostile projectiles.  </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_4.png'} alt="physical weapons" />
            
            <h5>Chemical Weapon</h5>
            <p>Chemical weapons deal chemical damage and apply defence reduction on targets. Most weapons from this class prioritize on apply debuff on multiple targets or stacking them.
                As a result, they have good Area of Effect or spreading projectiles or piercing power.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_5.png'} alt="chemical weapons" />

            <h5>Electrical Weapon</h5>
            <p>Electrical weapons deal energy damage and zap nearby enemies. Zap damage scales with the current weapon damage. They require lots of energy and have large range as well as projectile speed. Futhermore, they vary alot in different type of attack. For example, Shock cannon fire a slow projectile that constantly zaps nearby targets or the impaling attack of lightning spear, zaps all enemies it touch and nearby as well.</p>
            <p>This is my favourite weapon type, from zapping visual from all over the screen. It is just refreshing seeing them in action.</p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_6.png'} alt="electrical weapons" />

            <h5>Magnetic Weapon</h5>
            <p>Magnetic or Magnetized weapons specialize on disposition enemies in an area. They are the main support class of weapons and do not deal much damage. Gravity Artillery drags all enemies affected to the center, then an aoe attack would cause a devastating impact on the enemies assault.
                Or if you play melee, you can utilize the Hook to drag target in range.
            </p>
            <p>This type gave me the most of problems during development, I did not have the vfx or a good reference on vfx at first, Moreover, I also got couples of issue with 2d physics in the game engine. However, I am glad with the current result. </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_7.png'} alt="magnetic weapons" />

            <h5>Quantum Weapon</h5>
            <p>Also know as light weapon, they possess ability to penetrate enemies and deal damage as long as projectiles fly. Most weapons don't simply deal damage by shooting and their penetration property are expanded further. 
                Morning Star projectiles will return to the weapon or Ardent Blazer release 2 side projectiles each time hitting a target. There are so much more that I can't wait for player to try!</p>
            <p>The main downside is this type costs a fortune for purchasing as well as operation, but they would surely worth your investment. </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_8.png'} alt="quantum weapons" />

            <h5>Sonic Weapon</h5>
            <p>Sonic weapons' most crucial property is bouncing, by simply twisting certain attributes I managed to obtain various trait, for examble, adding a delay before bouncing the projectile may pierce through target before changing direction or explosion on each bounce or release minor projectiles.</p>
            <p>They have a limit on the amount of bouncing and chance of surprise is lower than quantum. All and all, they are decent and probably noisy.</p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_9.png'} alt="sonic weapons" />

            <h5>Energy Weapon</h5>
            <p>This class is similar to physical weapon but deal energy damage. They are the classic type and mainly focus on damage.
            </p>
            <p>I mostly pick monochromatic color for vfx to not confuse players, however, at the point of developping this type, I had ran out of color and decided to pick other choice. The color is so gooooooood!

            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_10.png'} alt="energy weapons" />

            <h5>Unclassified Weapon</h5>
            <p>This group actually contain multiple minor classified types such as Thermal, or Cryogenic weapons, but there not many instances of weapons to call them a group.
                Thermal weapons apply enhance latter energy attack, Cryogenic weapons slow down enemies and EMP weapons deals triple damage to shield.
                Oh wait! There is also another class, vanguard weapons that only activate at certain speed, and it's damage heavily scale with the current moving speed. CHARGEEEE!
            </p>
            <p>
                Vanguard is extremely fun, and they also knock enemies a side, but you couldn't rotate during the charging since the speed would be slown down.
            </p>

            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_11.png'} alt="energy weapons" />

            <h5>Drone Factory</h5>
            <p>
                A wise man once said:" I'm weak but my comrades are crowed"... Anyway, feel the swarm!.

            </p>
            <p>
                There are different types of drones, they can do a lot of tricks, such as melee attack, range attack, status effect, slow or block incoming projectiles and they can sacrify for you as well.
                There are a limitation for amount of drones each factory can produce at a time but there is no cap on the amount of drones in the battle field so dry your juice out to build the most of them.
            </p>
            <img src={process.env.PUBLIC_URL +'/GameDemo/Feature_12.png'} alt="energy weapons" />

            <p>Phew! That is a lot, but it is merely a portion modules and weapons that is currently in the game.</p>
            <div className='divider'></div>
            <h4>Crews</h4>
            <p> </p>

            <div className='divider'></div>

            <h4>Tune-Up</h4>
            <p></p>

            <div className='divider'></div>

            <h4>Collection & Progression</h4>
            <p></p>

            <div className='divider'></div>

        </div>
    )
}

export default Paragraph