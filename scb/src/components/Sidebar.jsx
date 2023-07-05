import { NavLink } from 'react-router-dom';
import "./sidebar.module.css";

// eslint-disable-next-line react/prop-types
export default function SideBar({ isOpen }) {
  return (
    <div
      className="vh-100 sidebar"
      style={{
        width: isOpen ? '280px' : '0',
      }}
    >
      <div className='p-3'>
        {isOpen && (
          <>
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <svg className="bi pe-none me-2" width="40" height="32">
                <use xlinkHref="#bootstrap"></use>
              </svg>
              <span className="fs-4"><i className="bi bi-cart4 fs-4"></i> SCAP</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item" >
                <NavLink className=' link-menu-sidebar' to='/'>
                  <i className={`bi bi-house-fill m-2`}></i>
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className='link-menu-sidebar' to='/relatorios'>
                  <i className={`bi bi-file-text-fill m-2`}></i>
                  Relatórios
                </NavLink>
              </li>
              <li className="nav-item" >
                <button className="link-menu-sidebar btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#cadastro-collapse" >
                  <i className="bi bi-patch-plus-fill">&nbsp;</i> Cadastro <i className="bi bi-caret-down-fill"></i>
                </button>
                <div className="collapse show" id="cadastro-collapse">
                  <ul className="nav nav-pills flex-column mb-auto">
                    {itemMenu.map((item, index) => (
                      <li className="nav-item" key={index}>
                        <NavLink className=' link-menu-sidebar' to={item.path}>

                          <i className={`bi ${item.icon} m-2`}></i>
                          {item.nome}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

            </ul>
          </>
        )}
      </div>
    </div>
  );
}

const itemMenu = [
  {
    nome: 'Animais',
    path: '/animais',
    icon: 'bi-cart-check-fill',

  },
  {
    nome: 'Galpoes',
    path: '/galpoes',
    icon: 'bi-person-fill',
  },
  {
    nome: 'Entradas',
    path: '/entradas',
    icon: 'bi-box-fill',
  },
  {
    nome: 'Funcionarios',
    path: '/funcionarios',
    icon: 'bi-person-badge-fill',
  },
  {
    nome: 'Caminhoes',
    path: '/caminhoes',
    icon: 'bi-person-fill-lock',
  },
  {
    nome: 'Lotes',
    path: '/lotes',
    icon: 'bi-box2-fill',
  },
  {
    nome: 'Vacinacoes',
    path: '/vacinacoes',
    icon: 'bi-box2-fill',
  },
  {
    nome: 'Clientes',
    path: '/clientes',
    icon: 'bi-box2-fill',
  },
  {
    nome: 'Vendas',
    path: '/vendas',
    icon: 'bi-box2-fill',
  },
  {
    nome: 'Animais Recebidos Mes',
    path: '/relatorios/animaisRecebidosMes',
    icon: 'bi-box2-fill',
  },
];