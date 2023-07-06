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
              <span className="fs-4"><i className="bi bi-clipboard2-data-fill fs-4"></i>🐮 SCB</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item" >
                <NavLink className=' link-menu-sidebar' to='/'>
                  <i className={`bi bi-house-fill m-2`}></i>
                  Home
                </NavLink>
              </li>
              <li className="nav-item" >
                <button className="link-menu-sidebar btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#cadastro-collapse" >
                  <i className="bi bi-patch-plus-fill">&nbsp;</i> Cadastro <i className="bi bi-caret-down-fill"></i>
                </button>
                <div className="collapse show" id="cadastro-collapse">
                  <ul className="nav nav-pills flex-column mb-auto">
                    {menuCadastro.map((item, index) => (
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
              <li className="nav-item" >
                <button className="link-menu-sidebar btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#processo-collapse" >
                  <i className="bi bi-patch-plus-fill">&nbsp;</i> Processos <i className="bi bi-caret-down-fill"></i>
                </button>
                <div className="collapse show" id="processo-collapse">
                  <ul className="nav nav-pills flex-column mb-auto">
                    {menuProcesso.map((item, index) => (
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
              <li className="nav-item" >
                <button className="link-menu-sidebar btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#relatorio-collapse" >
                  <i className="bi bi-patch-plus-fill">&nbsp;</i> Relatórios <i className="bi bi-caret-down-fill"></i>
                </button>
                <div className="collapse show" id="relatorio-collapse">
                  <ul className="nav nav-pills flex-column mb-auto">
                    {menuRelatorio.map((item, index) => (
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

const menuCadastro = [
  {
    nome: 'Animais',
    path: '/animais',
    icon: 'bi-caret-right-fill',

  },
  {
    nome: 'Galpoes',
    path: '/galpoes',
    icon: 'bi-house-gear',
  },
  {
    nome: 'Funcionarios',
    path: '/funcionarios',
    icon: 'bi-person-badge-fill',
  },
  {
    nome: 'Caminhoes',
    path: '/caminhoes',
    icon: 'bi-truck',
  },
  {
    nome: 'Lotes',
    path: '/lotes',
    icon: 'bi-box2-fill',
  },
  {
    nome: 'Clientes',
    path: '/clientes',
    icon: 'bi-person-fill',
  },
]

const menuProcesso = [
  {
    nome: 'Entradas',
    path: '/entradas',
    icon: 'bi-chevron-double-right',

  },
  {
    nome: 'Vacinacoes',
    path: '/vacinacoes',
    icon: 'bi-capsule',
  },
  {
    nome: 'Vendas',
    path: '/vendas',
    icon: 'bi-cart-check',
  }
]

const menuRelatorio = [
  {
    nome: 'Animais Recebidos Mes',
    path: '/relatorios/animaisRecebidosMes',
    icon: 'bi-clipboard-fill',
  },
  {
    nome: 'Média Recebimento Diário',
    path: '/relatorios/mediaRecebDiario',
    icon: 'bi-clipboard-fill',
  },
  {
    nome: 'Lotes Próximos Vencer',
    path: '/relatorios/lotesProximosVencer',
    icon: 'bi-clipboard-fill',
  },
  {
    nome: 'Total Vacinas Aplicadas',
    path: '/relatorios/totalVacinasAplicadas',
    icon: 'bi-clipboard-fill',
  },
  {
    nome: 'Total Vendas por Cliente',
    path: '/relatorios/totalVendasCliente',
    icon: 'bi-clipboard-fill',
  },
  {
    nome: 'Média de Peso de Animais Vendidos',
    path: '/relatorios/mediaPesoAnimais',
    icon: 'bi-clipboard-fill',
  },
]


;